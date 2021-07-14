const crypto = require('crypto');
const cloudinary = require('cloudinary');

const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middlewares/catchAsync');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail')

//Register a user => /api/v1/register
exports.registerUser = catchAsync( async(req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder: 'avatars',
        width: 150,
        crop: "scale"
    })
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: result.public_id,
            url: result.secure_url
        }
    })

    sendToken(user, 200, res);
})

//Login User => /api/v1/login
exports.loginUser = catchAsync( async (req, res, next) => {
    const {email, password} = req.body;

    //check if email and pasword is entered by user
    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & Password', 400));
    }

    //Finding user in database
    const user = await User.findOne({ email }).select('password')

    if(!user) {
        return next( new ErrorHandler('Invalid Email or Password', 400));
    }

    //Check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return next( new ErrorHandler('Invalid Email or Password', 400));
    }

    sendToken(user, 200, res);
})

//Forgot Password => /api/v1/password/forgot
exports.forgotPassword = catchAsync(async (req, res, next) => {

    const user = await User.findOne({email: req.body.email});
    
    if(!user){
        return next(new ErrorHandler('User not found with this email', 404));
    }

    //Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave: false});

    //Create reset password url
    const reseUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is as follow:\n\n${reseUrl}\n\nIf you have not requested this email, then ignore it.`

    try {
        
        await sendEmail({
            email: user.email,
            subject: 'Ecommerce Password Recovery',
            message
        })

        res.status(200).json({
            sucess: true,
            message: `Email sent to ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave: false});

        return next(new ErrorHandler(error.message, 500));
    }
})

//Reset Password => /api/v1/password/reset/token
exports.resetPassword = catchAsync(async (req, res, next) => {
    
    //Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
    })

    if(!user) {
        return next(new ErrorHandler('Reset token is invalid or has been expired', 400));
    }

    if(req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    //Setup new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
})

//Get currently logged in user details => /api/v1/me
exports.getUserProfile = catchAsync(async(req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        sucess: true,
        user
    })
})

//Update / change password => /api/v1/password/update
exports.updatePassword = catchAsync( async(req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    //Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword);

    if(!isMatched) {
        return next(new ErrorHandler('Old password si incorrect', 400));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res);
})

//Update user profile => /api/v1/me/update
exports.updateProfile = catchAsync( async(req, res, next) => {
    
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    //Update avatar
    if(req.body.avatar !== ''){
        const user = await User.findById(req.user.id);

        const image_id = user.avatar.public_id;
        const res = await cloudinary.v2.uploader.destroy(image_id);

        const result = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder: 'avatars',
            width: 150,
            crop: "scale"
        })

        newUserData.avatar = {
            public_id: result.public_id,
            url: result.secure_url
        }
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

//Logout user => /api/v1/logout
exports.logout = catchAsync(async(req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        sucess: true,
        message: 'Loged out'
    })
})

// Admin Routes

// Get all users => /api/v1/admin/users
exports.getAllUsers = catchAsync( async(req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

//Get user Details => /api/v1/admin/user/:id
exports.getUserDetails = catchAsync(async(req, res, next) =>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User does not found with id ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user
    })
})

//Update user profile => /api/v1/admin/user/:id
exports.updateUser = catchAsync( async(req, res, next) => {
    
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }


    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        sucess: true
    })
})

//Delete User => /api/v1/admin/user/:id
exports.deleteUser = catchAsync(async(req, res, next) =>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User does not found with id ${req.params.id}`));
    }

    // Remove awatar --TODO

    await user.remove();

    res.status(200).json({
        success: true,
        
    })
})
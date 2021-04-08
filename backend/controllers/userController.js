const User = require('../models/userModel');

const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middlewares/catchAsync');
const sendToken = require('../utils/jwtToken');

//Register a user => /api/v1/register
exports.registerUser = catchAsync( async(req, res, next) => {
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: 'avatars/kccvibpsuiusmwfepb3m',
            url: 'https://res.cloudinary.com/shopit/image/upload/v1606305757/avatars/kccvibpsuismwfepb3m.png'
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
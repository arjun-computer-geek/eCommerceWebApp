const User = require('../models/userModel');

const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middlewares/catchAsync');

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

    const token = user.getJwtToken();
    
    res.status(201).json({
        sucess: true,
        token
    })
})
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const ErrorHandler = require("../utils/errorhandler");
const catchAsync = require("./catchAsync");

//Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsync(async(req, res, next) => {

    const { token } = req.cookies;
    
    if(!token) {
        return next(new ErrorHandler('Login first to access this resource', 400));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();

})

//Handling users roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            
            return next (new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403))
        }
        next();
    }
}
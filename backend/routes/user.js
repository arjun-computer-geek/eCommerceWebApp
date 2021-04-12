const express = require('express');
const router = express.Router();

const {
    registerUser, 
    loginUser, 
    logout, 
    forgotPassword, 
    resetPassword,
    getUserProfile,
    updatePassword
} = require('../controllers/userController');

const {isAuthenticatedUser} = require('../middlewares/userAuth')

router
    .route('/register')
    .post(registerUser);

router
    .route('/login')
    .post(loginUser);

router
    .route('/password/forgot')
    .post(forgotPassword);

router
    .route('/password/reset/:token')
    .put(resetPassword);

router
    .route('/logout')
    .get(logout);

router
    .route('/me')
    .get(isAuthenticatedUser, getUserProfile)

    router
    .route('/password/update')
    .put(isAuthenticatedUser, updatePassword);
module.exports = router;
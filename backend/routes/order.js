const express = require('express');
const router = express.Router();

const {newOrder, getSingleOrder, myOrders} = require('../controllers/orderController');
const {isAuthenticatedUser} = require('../middlewares/userAuth');

router
    .route('/order/new')
    .post(isAuthenticatedUser, newOrder)

router
    .route('/order/:id')
    .get(isAuthenticatedUser, getSingleOrder)

router
    .route('/orders/me')
    .get(isAuthenticatedUser, myOrders)

module.exports = router;
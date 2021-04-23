const Order = require('../models/orderModel');
const Product = require('../models/productModel');

const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middlewares/catchAsync');

//Create a new order => /api/v1/order/new
exports.newOrder = catchAsync(async(req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(200).json({
        sucess: true,
        order
    })
})
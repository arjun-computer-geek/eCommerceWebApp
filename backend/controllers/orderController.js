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

//Get single order => /api/v1/order/:id

exports.getSingleOrder = catchAsync( async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if(!order) {
        return next(new ErrorHandler('No order found with this ID', 404));
    }

    res.status(200).json({
        success: true,
        order
    })
})

//Get logged in user orders => /api/v1/orders/me

exports.myOrders = catchAsync( async (req, res, next) => {
    const orders = await Order.find({user: req.user.id});


    res.status(200).json({
        success: true,
        orders
    })
})

//Get all orders => /api/v1/admin/orders/

exports.allOrders = catchAsync( async (req, res, next) => {
    const orders = await Order.find()

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice;
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})

//Update /process order - ADMIN => /api/v1/admin/order/:id

exports.updateOrder = catchAsync( async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if(order.orderStatus = 'Delivered') {
        return next(new ErrorHandler('You have already delivered order', 400))
    }

    order.orderItems.forEach(async iterm => {
        await updateStock(item.product, item.quantity)
    })

    order.orderStatus = req.body.status,
    order.deliveredAt = Date.now()

    await order.save;

    res.status(200).json({
        success: true
        
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock - quantity;

    await product.save({validateBeforeSave: false});
}

//Delete Order => /api/v1/admin/order/:id
exports.deleteOrder = catchAsync( async(req, res, next) => {
    const order = await Order.findById(req.params.id);

    if(!order) {
        return next(new ErrorHandler('No order found with this ID', 404));
    }

    await order.remove();
    
    res.status(200).json({
        success: true
    })
})
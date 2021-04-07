const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middlewares/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

// Create new product => /api/v1/product/new
exports.createProduct =catchAsync( async (req, res, next) => {

    const newProduct = await Product.create(req.body);
    
    res.status(201).json({
        success: true,
        newProduct
    })
});

//Get All Products => /api/v1/products?keyword=mobile
exports.getProducts = catchAsync( async (req, res,next) => {
    
    const apiFeatures = new APIFeatures(Product.find(), req.query)
                        .search()
    const products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        message: products
    });
});

//Get Single Product Details => /api/v1/product/:id
exports.getSingleProduct = catchAsync( async(req, res, next) => {

    const product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler('Product Not Found', 404));
    }

    res.status(200).json({
        success: true,
        product
    })
});

//Update product => /api/v1/admin/product/:id
exports.updateProduct = catchAsync( async (req, res, next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product Not Found', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
});

//Delete product => /api/v1/admin/product/:id
exports.delteProduct = catchAsync( async (req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product Not Found', 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product is deleted.'
    });
});
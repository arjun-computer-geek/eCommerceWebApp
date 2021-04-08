const Product = require('../models/productModel');

const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middlewares/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

// Create new product => /api/v1/admin/product/new
exports.createProduct =catchAsync( async (req, res, next) => {

    req.body.user = req.user.id;
    
    const newProduct = await Product.create(req.body);
    
    res.status(201).json({
        success: true,
        newProduct
    })
});

//Get All Products => /api/v1/products?keyword=mobile
exports.getProducts = catchAsync( async (req, res,next) => {

    const resultsPerPage = 4;
    const productCount = await Product.countDocuments();
    console.log(productCount);
    
    const apiFeatures = new APIFeatures(Product.find(), req.query)
                        .search()
                        .filter()
                        .pagination(resultsPerPage)
    const products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: products.length,
        productCount,
        products
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
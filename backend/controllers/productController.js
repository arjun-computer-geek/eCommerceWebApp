const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');

// Create new product => /api/v1/product/new
exports.createProduct = async (req, res, next) => {

    const newProduct = await Product.create(req.body);

    res.status(201).json({
        success: true,
        newProduct
    })
}

//Get All Products => /api/v1/products
exports.getProducts = async (req, res,next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        message: products
    });
}

//Get Single Product Details => /api/v1/product/:id
exports.getSingleProduct = async(req, res, next) => {

    const product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler('Product Not Found', 404));
    }

    res.status(200).json({
        success: true,
        product
    })
}

//Update product => /api/v1/admin/product/:id
exports.updateProduct = async (req, res, next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: 'Product Not found'
        })
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
}

//Delete product => /api/v1/admin/product/:id
exports.delteProduct = async (req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: 'Product Not found'
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product is deleted.'
    });
}
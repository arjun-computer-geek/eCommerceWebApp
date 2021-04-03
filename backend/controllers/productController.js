const Product = require('../models/productModel');

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
    
    if(!product) {
        return res.status(404).json({
            success: false,
            message: 'Product Not found'
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}
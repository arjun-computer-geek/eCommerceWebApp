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
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

    const resPerPage = 12;
    const productsCount = await Product.countDocuments();
    console.log(productsCount);
    
    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter()
    let products = await apiFeatures.query;
    let filteredProductsCount = products.length;
    apiFeatures.pagination(resPerPage)

    products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
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


//create new review = > /api/v1/review
exports.createProductReview = catchAsync(async(req, res, next) => {
    const { rating, comment, productId } = req.body;
    
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find( r => r.user.toString() === req.user._id.toString());

    if(isReviewed){
        product.reviews.forEach(review => {
            if(review.user.toString() === req.user._id.toString()){
                review.comment = comment;
                review.rating = rating;
            }
        })
    } else{
        product.reviews.push(review),
        product.numOfReviews = product.reviews.length
    }

    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc,0) / product.reviews.length;

    await product.save({validateBeforeSave: false});

    res.status(200).json({
        success: true
    })
})

//Get product Reviews => /api/v1/reviews
exports.getProductReviews = catchAsync( async(req, res, next) => {
    const product = await Product.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})

//Delete product Reviews => /api/v1/reviews
exports.deleteReviews = catchAsync( async(req, res, next) => {
    const product = await Product.findById(req.query.productId);

    const reviews = product.reviews.filter(review => review._id.toString() !== req.query.id.toString());

    const numOfReviews = reviews.length

    const ratings = product.ratings = product.reviews.reduce((acc, item) => item.rating + acc,0) / reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    },{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})
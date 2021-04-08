const express = require('express');
const router = express.Router();

const {getProducts,createProduct,getSingleProduct,updateProduct,delteProduct} = require('../controllers/productController');

const {isAuthenticatedUser} = require('../middlewares/userAuth')

router
    .route('/products')
    .get(isAuthenticatedUser, getProducts);
router
    .route('/product/:id')
    .get(getSingleProduct);
router
    .route('/product/new')
    .post(createProduct);
router
    .route('/admin/product/:id')
    .put(updateProduct)
    .delete(delteProduct);

module.exports = router;    
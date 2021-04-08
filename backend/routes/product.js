const express = require('express');
const router = express.Router();

const {getProducts,createProduct,getSingleProduct,updateProduct,delteProduct} = require('../controllers/productController');

const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/userAuth')

router
    .route('/products')
    .get(getProducts);
router
    .route('/product/:id')
    .get(getSingleProduct);
router
    .route('/admin/product/new')
    .post(isAuthenticatedUser, authorizeRoles('admin'), createProduct);
router
    .route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), delteProduct);

module.exports = router;    
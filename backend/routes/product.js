const express = require('express');
const router = express.Router();

const {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    delteProduct, 
    createProductReview,
    getProductReviews,
    deleteReviews
} = require('../controllers/productController');

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

router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReviews)

module.exports = router;    
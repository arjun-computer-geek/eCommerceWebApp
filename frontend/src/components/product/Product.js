import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    return (
        <Link className="col-4" to={`/product/${product._id}`}>
            {/* src={product.images[0].url} */}
            <img src="images/products/p1.jpg" alt="product1" />
            <h4 className="product-title">{product.name}</h4>
            <div className="rating">
            {/* <div className="rating" style={{width: `${(product.ratings /5) * 100}%`}}> */}
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <span className="no_of_reviews"> ({product.numOfReviews}) Reviews</span>
            </div>
            <p>&#8377; {product.price}</p>
        </Link>
    )
}

export default Product

import React from 'react'
import { Link } from "react-router-dom";


const Product = ({product}) => {
    return (
        <div className="col-4 latest-products">
            <Link to={`/product/${product._id}`}>
                <img src="images/products/p1.jpg" alt="product1" />
                {/* <img src={product.images[0].url} alt="product1" /> */}
                <h4 className="product-title">{product.name}</h4>
                <div className="rating">
                    <div className="star-outer">
                        <div className="star-inner" style={{width: `${(product.ratings / 5) * 100}%`}}></div>
                    </div>
                    <span className="number-rating"> ({product.numOfReviews} Reviews)</span>
                </div>
                <p>&#8377; {product.price}</p>
            </Link>
        </div>
    )
}

export default Product

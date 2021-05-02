import React from 'react';

const LatestProducts = () => {
    return (
        <>
                <div className="container">
        <h2 className="title">Latest Products</h2>
        <div className="row">
            <div className="col-4">
                <img src="images/products/p3.jpeg" alt="product1" />
                <h4 className="product-title">Head Phones</h4>
                <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>&#8377; 499</p>
            </div>
            <div className="col-4">
                <img src="images/products/p4.jpeg" alt="product1" />
                <h4 className="product-title">Watches</h4>
                <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>&#8377; 499</p>
            </div>
            <div className="col-4">
                <img src="images/products/p5.jpg" alt="product1" />
                <h4 className="product-title">Bluetooth Headset</h4>
                <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>&#8377; 499</p>
            </div>
            <div className="col-4">
                <img src="images/products/p6.jpeg" alt="product1" />
                <h4 className="product-title">Attractive Shoes</h4>
                <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>&#8377; 499</p>
            </div>
        </div>
    </div>
        </>
    )
}

export default LatestProducts;

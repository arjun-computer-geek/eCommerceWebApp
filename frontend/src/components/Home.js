import React from 'react'

import MetaData from "./layouts/MetaData"

const Home = () => {
    return (
        <>
            <MetaData title={'Buy Best Products Online'}/>
            <div class="container">
                <h2 class="title">Latest Products</h2>
                <div class="row">
                    <div class="col-4 latest-products">
                        <img src="images/products/p1.jpg" alt="product1" />
                        <h4 class="product-title">Cotton Jeans Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                        <p>&#8377; 499</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Home

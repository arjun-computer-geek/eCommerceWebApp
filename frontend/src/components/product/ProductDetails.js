import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import { Carousel } from 'react-bootstrap'

import './ProductDetails.css'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import Loader from '../layouts/Loader'
import Metadata from '../layouts/MetaData'

const ProductDetails = ({match}) => {

    const[quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const {loading, error, product} = useSelector(state => state.productDetails);

    const alert = useAlert();

    useEffect(() => {
        
        dispatch(getProductDetails(match.params.id))
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
    },[dispatch, alert, error, match.params.id])

    const increaseQty = () =>{
        const count = document.querySelector('.count');

        if(count.valueAsNumber >= product.stock) return;

        const qty = count.valueAsNumber + 1;
        setQuantity(qty);
    }

    const decreaseQty = () =>{
        const count = document.querySelector('.count');

        if(count.valueAsNumber <= 1) return;

        const qty = count.valueAsNumber - 1;
        setQuantity(qty)
    }

    return (
        <>
        {loading ? <Loader /> : (
            <>
                <Metadata title={product.name} />
                <div className="container">
                    <div className="row f-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="product_image">
                            <Carousel pause='hover'>
                                {product.images && product.images.map(image => (
                                    <Carousel.Item key={image.public_id}>
                                        <img className="d-block w-100" src={image.url} alt={product.title} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <div className="col-12 col-lg-5 mt-5">
                            <h3>{product.name}</h3>
                            <p id="product_id">Product # {product._id}</p>

                            <hr/>

                            <div className="star-outer">
                                <div className="star-inner" style={{width: `${(product.ratings / 5) * 100}%`}}></div>
                            </div>
                            <span id="no_of_reviews"> &nbsp;({product.numOfReviews} Reviews)</span>

                            <hr/>

                            <p id="product_price">&#8377; {product.price}</p>
                            <div className="stockCounter d-inline">
                                <span className="btn1 btn-danger minus" onClick={decreaseQty}>-</span>

                                <input type="number" className="count d-inline" value={quantity}readOnly />

                                <span className="btn1 btn-primary plus" onClick={increaseQty}>+</span>
                            </div>
                            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

                            <hr/>

                            <p>Status: <span id="stock_status" className={product.stock > 0 ? 'greenColor' : 'redColor'}>{product.stock > 0 ? 'In Stock' : 'Out Of Stock'}</span></p>

                            <hr/>

                            <h4 className="mt-2">Description:</h4>
                            <p>{product.description}</p>
                            <hr/>
                            <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
                            
                            <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
                                        Submit Your Review
                            </button>
                            
                            <div className="row mt-2 mb-5">
                                <div className="rating w-50">

                                    <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">

                                                    <ul className="stars" >
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                    </ul>

                                                    <textarea name="review" id="review" className="form-control mt-3">

                                                    </textarea>

                                                    <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                    
                        </div>

                    </div>

                </div>
                </div>
            </>
        )}
        </>
    )
}

export default ProductDetails

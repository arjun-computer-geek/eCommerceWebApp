import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import{ useDispatch, useSelector } from 'react-redux'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { getProducts } from '../actions/productActions';
import MetaData from './layouts/MetaData';
import Product from './product/Product';
import Loader from './layouts/Loader';

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = ({match}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 50000]);
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);

    const categories = [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Sports',
        'Home'
    ]

    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, products, error, resPerPage, productsCount, filteredProductsCount} = useSelector(state => state.products)

    const keyword = match.params.keyword

    useEffect(() => {

        if(error){
            return alert.error(error)
        }

        dispatch(getProducts(keyword, currentPage, price, category, rating));

    }, [dispatch, alert, error, keyword, currentPage, price, category, rating])

    const setCurrentPageNo = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    let count = productsCount;
    if(keyword) {
        count = filteredProductsCount;
    }

    return (
        <>
        {loading? <Loader />:
            <>
                <MetaData title={'Buy Best Products Online'}/>
                <div className="container">
                    <h2 className="title">Latest Products</h2>
                    <div className="row">
                        {keyword?(
                            <>
                                <div className="col-6 col-md-3 mt-5 mb-5">
                                    <div className="px-5">
                                        <Range 
                                            marks={{
                                                1: `₹1`,
                                                50000: `₹50000`
                                            }}
                                            min={1}
                                            max={50000}
                                            defaultValue={[1, 50000]}
                                            tipFormatter={value => `₹${value}`}
                                            tipProps={{
                                                placement: "top",
                                                visible: true
                                            }}
                                            value={price}
                                            onChange={price => setPrice(price)}
                                        />
                                        <hr className="my-5" />

                                        <div className="mt5">
                                            <h4 className="mb-3">
                                                Categories
                                            </h4>
                                            <ul className="pl-0">
                                                {categories.map(category =>(
                                                    <li 
                                                    style={{cursor: 'pointer',                  listStyleType: 'none'}}
                                                    key={category}
                                                    onClick={() => setCategory(category)}>
                                                        {category}
                                                    </li>
                                                ))}
                                                
                                            </ul>
                                        </div>

                                        <hr className="my-3" />

                                        <div className="mt5">
                                            <h4 className="mb-3">
                                                Ratings
                                            </h4>
                                            <ul className="pl-0">
                                                {[5, 4, 3, 2, 1].map(star =>(
                                                    <li 
                                                    style={{cursor: 'pointer',                  listStyleType: 'none'}}
                                                    key={star}
                                                    onClick={() => setRating(star)}>
                                                        <div className="star-outer">
                                                            <div className="star-inner" style={{width:`${star * 20}%`}}></div>
                                                        </div>
                                                    </li>
                                                ))}
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-9">
                                    <div className="row">
                                        {products && products.map(product => (
                                            <Product key={product.id} product={product} />
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            products && products.map(product => (
                                <Product key={product.id} product={product} />
                            ))
                        )}
                    </div>
                </div> 
                {resPerPage <= count &&(
                <div className="d-flex justify-content-center mt-5">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText={'Next'}
                        prevPageText={'Prev'}
                        firstPageText={'First'}
                        lastPageText={'Last'}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
                )}
            </>
        }
        </>
    )
}

export default Home

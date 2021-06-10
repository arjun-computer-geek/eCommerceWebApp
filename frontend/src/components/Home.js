import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import{ useDispatch, useSelector } from 'react-redux'
import Pagination from 'react-js-pagination'

import { getProducts } from '../actions/productActions'
import MetaData from './layouts/MetaData'
import Product from './product/Product';
import Loader from './layouts/Loader';

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, products, error, resPerPage, productsCount} = useSelector(state => state.products)

    useEffect(() => {

        if(error){
            return alert.error(error)
        }

        dispatch(getProducts(currentPage));

    }, [dispatch, alert, error, currentPage])

    const setCurrentPageNo = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    return (
        <>
        {loading? <Loader />:
            <>
                <MetaData title={'Buy Best Products Online'}/>
                <div className="container">
                    <h2 className="title">Latest Products</h2>
                    <div className="row">
                        {products && products.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div> 
                {resPerPage <= productsCount &&(
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

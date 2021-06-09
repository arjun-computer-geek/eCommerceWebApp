import React, { useEffect } from 'react'

import MetaData from './layouts/MetaData'
import{ useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions';
import Product from './product/Product';
import Loader from './layouts/Loader';

const Home = () => {

    const dispatch = useDispatch();

    const {loading, products, error, productsCount} = useSelector(state => state.products)

    useEffect(() => {

        dispatch(getProducts());

    }, [dispatch])

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
            </>
        }
        </>
    )
}

export default Home

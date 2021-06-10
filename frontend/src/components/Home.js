import React, { useEffect } from 'react'
import { useAlert } from 'react-alert';
import{ useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions';

import MetaData from './layouts/MetaData'
import Product from './product/Product';
import Loader from './layouts/Loader';

const Home = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, products, error, productsCount} = useSelector(state => state.products)

    useEffect(() => {

        if(error){
            alert.error(error)
        }

        dispatch(getProducts());

    }, [dispatch, alert, error])

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

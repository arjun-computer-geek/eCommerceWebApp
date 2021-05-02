import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import './FeatureProducts.css';
import { getProducts } from '../../actions/productActions';
import Product from './../product/Product';
import Loader from './../layout/Loader';

const FeatureProducts = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const {loading, products, error, productsCount} = useSelector(state => state.products)

    useEffect(() => {
        if(error){
            return alert.error(error)
        }
        dispatch(getProducts());

    }, [dispatch, alert, error])

    return (
        <>
            {loading ? <Loader /> : 
                <>
                    <div className="container">
                        <h2 className="title">Featured Products</h2>
                        <div className="row">
                            {products && products.map(product => (
                                <Product key={product.id} product ={product}/>
                            ))}
                        </div>
                    </div>
                </>
            }
            
        </>
    )
}

export default FeatureProducts;

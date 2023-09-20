import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = () => {
    let productData = useLoaderData();
    let {products}=productData;
    return (
        <div className='grid grid-cols-3'>
            {
                products.map(data => <SingleProduct key={data.id} data={data}></SingleProduct>)
            }
        </div>
    );
};

export default Products;
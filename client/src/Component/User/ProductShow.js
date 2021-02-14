import React from 'react';
import Product from './Product';
import './productShow.css';

const ProductShow = () => {
    return (
        <div className="product-container">
            <h2>Featured Product</h2>
            <div id="product-show">
                <Product></Product>
            </div>
            <div className="load-more">
                <button>Load More</button>
            </div>
        </div>
    );
};

export default ProductShow;
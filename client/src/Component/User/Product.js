import React from 'react';
import './productShow.css'
import {Link} from "react-router-dom";
import man1 from './img/man1.jpg'
const Product = () => {
    
    return (
        <div id="product">
            <div className="image">
                <Link to="/productDetails-Page">
                <img src={man1} alt=""/>
                </Link>
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>315 /-</p>
            <div className="show-addCart">
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
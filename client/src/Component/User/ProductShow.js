import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import './productShow.css';
import man1 from './img/man1.jpg';
import axios from 'axios';
import URL from './Url';
import { set } from 'mongoose';
const ProductShow = () => {
    const [products,setProducts] = useState([]);
    const [skip,setSkip] = useState(0);
    const [limit,setLimit] = useState(8);
    const [loadMores,setLoadMores] = useState(false);

    const getAllProduct = (variables)=>{
        axios.post(`${URL}/get-products`,
        {variables},{
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        .then(data=>{
            if(loadMore){
                setProducts([...products,data.data])
            }else{
                setProducts(data.data)
            console.log(data.data);
            }
        })
    }
    useEffect(()=>{
        const variables = {skip,limit}
        getAllProduct(variables)
    },[])
    const loadMore = ()=>{
        setSkip(limit)
        setLimit(limit+8)
        const variables = {skip,limit}
        setLoadMores(true)
        getAllProduct(variables)

    }
    return (
        <div className="product-container">
            <h2>Featured Product</h2>
            <div className="product-wrp">
                <div class="product-show">
                    <div className="image">
                        <Link to="/productDetails-Page">
                        <img src={man1} alt=""/>
                        </Link>
                    </div>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>315 /-</p>
                    <div className="show-addCart">
                        <button type="button" className="btn">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <button onClick={loadMore}>Load More And</button>
            </div>
        </div>
    );
};

export default ProductShow;
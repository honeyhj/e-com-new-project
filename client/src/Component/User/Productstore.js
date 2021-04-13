import React, { Component, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from './Product';
import './productShow.css';
import man1 from './img/man1.jpg';
import axios from 'axios';
import URL from './Url';
import { set } from 'mongoose';
import {connect} from 'react-redux'
import {fetchProduct} from '../../Actions/ProductActions'
const Productstore = ({loading,allproducts,error,fetchProduct}) => {
    const [products,setProducts] = useState(allproducts);
    const [psize,setpSize] = useState();
    const [skip,setSkip] = useState(0);
    const [limit,setLimit] = useState(8);
    const [loadMores,setLoadMores] = useState(false);
    const [kib,setLoadKib] = useState(false);
const {subcategory,category}=useParams()
    useEffect(()=>{
        console.log(subcategory,category)
    
        if(subcategory===category){
            allproducts.map(item=>{
                if(item.category===subcategory){
                   products.push(item)
                }
            })
        }
        else{
            console.log('else')
            allproducts.map(item=>{
                console.log(item ,'category didnt match' ,category)
                if(item.category===category && item.subcategory===subcategory){
                   products.push(item);
                    
                }
            })
        }
      
        console.log('set',products)

    },[])
    
console.log('hi',products)
    
    
    const loadMore = ()=>{
        setLoadMores(true)
        setSkip(skip+8)
        setLimit(8)
    }
        return (
                    <div className="product-container">
            <h2>Featured Product</h2>
            <div className="product-wrp">

                { products.map((item,index)=>{
                    return(
                        <div key={index} className="product-show">
                        <div className="image">
                            <Link to="/productDetails-Page">
                            <img src={`http://localhost:5000/${item.Images[0]}`} alt=""/>
                            </Link>
                        </div>
                        <h3>{item.category}</h3>
                    <h3>{item.subcategory}</h3>
                    <p>gfdgdf</p>
                        <div className="show-addCart">
                            <button type="button" className="btn">Add to cart</button>
                        </div>
                    </div>
                    )
                })}
               
            </div>
            {
                psize>=8 && (
                     <div className="load-more">
                <button onClick={()=>loadMore()}>Load More And</button>
            </div>
                )
            }
        </div> 
    );
};
const mapStateToProps=(state)=>({
    loading:state.ProductReducer.loading,
    allproducts:state.ProductReducer.products,
    error:state.ProductReducer.error,
    
})
export default connect(mapStateToProps,{fetchProduct})(Productstore);

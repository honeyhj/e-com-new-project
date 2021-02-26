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
    const [products,setProducts] = useState([]);
    const [psize,setpSize] = useState();
    const [skip,setSkip] = useState(0);
    const [limit,setLimit] = useState(8);
    const [loadMores,setLoadMores] = useState(false);
    const [kib,setLoadKib] = useState(false);
const {subcategory,category}=useParams()
    useEffect(()=>{
        console.log(subcategory,category)
        let data;
        if(subcategory===category){
            data= allproducts.map(item=>{
                if(item.CategoryName===subcategory){
                    return item;
                }
            })
        }
        else{
            data= allproducts.map(item=>{
                if(item.CategoryName===category){
                    item.subcategory.map(sub=>{
                        if(sub.Name===subcategory)
                        return sub;
                    })
                }
            })
        }
      
        console.log(data);

    },[subcategory])
    

    
    
    const loadMore = ()=>{
        setLoadMores(true)
        setSkip(skip+8)
        setLimit(8)
    }
        return (
                    <div className="product-container">
            <h2>Featured Product</h2>
            <div className="product-wrp">

                {allproducts.map((item,index)=>{
                    return(
                        <div key={index} className="product-show">
                        <div className="image">
                            <Link to="/productDetails-Page">
                            <img src={`http://localhost:5000/${item.Images[0]}`} alt=""/>
                            </Link>
                        </div>
                    <h3>{item.title}</h3>
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

import { set } from 'mongoose';
import React, { useEffect, useState } from 'react';
import MainSlider from './MainSlider';
import {connect} from 'react-redux'
import './user.css'
const ShowCase = (props) => {
    const [box,setBox] = useState(false)
    const [product,setProduct]=useState([]);
    const priceBox =() =>{

    }
useEffect(()=>{
setProduct(props.products)
    },[props.products])

    
const set=(e)=>{
    console.log(e.target.value)
    
}
    


    return (
        <div id="showCase">
            <div className="showCase-wrapper">
                <div className="showCase-item1">
                    <div className="box">
                        <div className="sub-box">
                            <button type="button" className="price-btn" onClick={()=>setBox(!box)}>Price Filter</button>
                            <input type="search" onChange={set} name="search" placeholder="Enter search item" className="search-inp"/>
                        </div>
                        {
                            box ?
                            <div className="dropBox">
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label>0-50</label> 
                            </div>
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label>0-50</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label>0-50</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label>0-50</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label>0-50</label>
                            </div>
                        </div>
                            :null
                        }
                    </div>
                    <div className="top-cat">
                        <h2>Top Categories</h2>
                        <div className="categories-item">
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="showCase-item2">
                    <MainSlider></MainSlider>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps=(state)=>({
    products:state.ProductReducer.products
})

export default connect(mapStateToProps,null) (ShowCase);
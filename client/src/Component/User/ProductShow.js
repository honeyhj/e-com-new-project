import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import './productShow.css';
import man1 from './img/man1.jpg';
import axios from 'axios';
import URL from './Url';
import { set } from 'mongoose';
class ProductShow extends Component {
    constructor(){
        super();
        this.state={
            products:[],
            pSize:'',
            skip:'',
            limit:'',
            loadMores:false,
        }
    }
        getAllProduct = (variables)=>{
        axios.post(`${URL}/get-products`,
        {variables},{
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        .then(data=>{
            if(this.loadMores){
                console.log(data.data.product);
                const  update = this.products.concat(data.data.product)
                this.setState({products:update})
                this.setState(this.pSize=data.data.postSize)
                this.setState(this.loadMores=false)
            }else{
                this.setState(this.products=data.data.product)
                this.setState(this.pSize=data.data.postSize)
                console.log(data.data.product);
                this.setState(this.loadMores=false)
                // this.setLoadMores(false)
            }
        })
    }
    componentDidMount =()=>{
        const variables = {skip,limit}
        this.getAllProduct(variables)
    }
        loadMore = ()=>{
        this.setState(this.skip=this.limit)
        this.setState(this.limit+8)
        const variables = {skip,limit}
        this.setState(this.loadMores=true)
        this.getAllProduct(variables)
    }
    render() {
        return (
                    <div className="product-container">
            <h2>Featured Product</h2>
            <div className="product-wrp">

                {this.products.map((item,index)=>{
                    return(
                        <div key={index} className="product-show">
                        <div className="image">
                            <Link to="/productDetails-Page">
                            <img src={man1} alt=""/>
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
                this.pSize>=8 && (
                     <div className="load-more">
                <button onClick={this.loadMore}>Load More And</button>
            </div>
                )
            }
           
        </div> 
        );
    }
}

export default ProductShow;
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Product from './Product';
// import './productShow.css';
// import man1 from './img/man1.jpg';
// import axios from 'axios';
// import URL from './Url';
// import { set } from 'mongoose';
// const ProductShow = () => {
//     const [products,setProducts] = useState([]);
//     const [psize,setpSize] = useState();
//     const [skip,setSkip] = useState(0);
//     const [limit,setLimit] = useState(8);
//     const [loadMores,setLoadMores] = useState(false);

//     const getAllProduct = (variables)=>{
//         axios.post(`${URL}/get-products`,
//         {variables},{
//             headers:{
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             }
//         })
//         .then(data=>{
//             if(loadMores){
//                 console.log(data.data.product);
//                 const  update=products.concat(data.data.product)
//                 setProducts(update)
//                 setpSize(data.data.postSize)
//                 setLoadMores(false)
//             }else{
//                 setProducts(data.data.product)
//                 setpSize(data.data.postSize)
//                 console.log(data.data.product);
//                 setLoadMores(false)
//             }
//         })
//     }
//     useEffect(()=>{
//         const variables = {skip,limit}
//         getAllProduct(variables)

//     },[])
   
//     const loadMore = ()=>{
//         setSkip(limit)
//         setLimit(limit+8)
//         const variables = {skip,limit}
//         setLoadMores(true)
//         getAllProduct(variables)

//     }
//     return (
//         <div className="product-container">
//             <h2>Featured Product</h2>
//             <div className="product-wrp">

//                 {products.map((item,index)=>{
//                     return(
//                         <div key={index} className="product-show">
//                         <div className="image">
//                             <Link to="/productDetails-Page">
//                             <img src={man1} alt=""/>
//                             </Link>
//                         </div>
//                     <h3>{item.title}</h3>
//                     <p>gfdgdf</p>
//                         <div className="show-addCart">
//                             <button type="button" className="btn">Add to cart</button>
//                         </div>
//                     </div>
//                     )
//                 })}
               
//             </div>
//             {
//                 psize>=8 && (
//                      <div className="load-more">
//                 <button onClick={loadMore}>Load More And</button>
//             </div>
//                 )
//             }
           
//         </div> 
//     );
// };

// export default ProductShow;
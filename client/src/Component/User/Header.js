import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import URL from './Url';

const Header = () => {
    const [toggleMenuBar,setToggleMenuBar] = useState(false);
  const [menus,setMenus] = useState([]);
  const [subMenus,setSubMenus] = useState([]);
  const [category,setCategory]=useState('');
  const handelOnClick = (sub,cate)=>{
  
   
    setToggleMenuBar(!toggleMenuBar)
    setSubMenus(sub)
    setCategory(cate);
  }
  const getmenus =  () => {
   
    axios.get(`${URL}/getmenus`).then((data) => {
      setMenus(data.data)
    });
  };
  useEffect(()=>{
    getmenus()
  },[])
    return (
        <div className="row" style={{ justifyContent: "center" }}>
           <div className="header">
             <div className="header-wrapper">
               <div className="header-item1">
                 <div className="logo">
                   <Link to="/"><span>BuyForest</span></Link>
                 </div>
               </div>
               <div className="header-item2">
                 {
                   menus.map((item,index)=>{
                     if(item.Type === "simplemenu"){
                       return(
                       <li  key={index}><Link to={`/productstore/${item.CategoryName}/${item.CategoryName}`}>{item.CategoryName}</Link></li>
                       )
                     }
                   })
                 }
                 {
                   menus.map((item,index)=>{
                     if(item.Type === "dropdownmenuholder"){
                       return(
                        <li key={index} 
                        onClick={() =>handelOnClick(item.SubCategory,item.CategoryName)}
                        >{item.CategoryName}</li>
                       )
                     }
                   })
                 }
                 {
                   menus.map((item,index)=>{
                     if(item.Type === "megamenuholder"){
                       return(
                         
                        <li 
                        key={index} 
                        onClick={() =>handelOnClick(item.SubCategory,item.CategoryName)}
                        >{item.CategoryName}</li>
                        
                         
                        )
                     }
                   })
                 }
               </div>
               <div className="header-item3">
                 bye
               </div>
             </div>
             {
              toggleMenuBar ? <div className="sub-header">
                {
                  subMenus.map((item,index)=>{
                    return(<li  key={index}><Link to={`/productstore/${category}/${item.Name}`}>{item.Name}</Link></li>)
                  })
                }
              </div> : null
            }
          </div>
          
        </div>
    );
};

export default Header;
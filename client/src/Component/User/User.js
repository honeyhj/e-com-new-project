import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Router, Route, Link } from "react-router-dom";
import URL from './Url';
import './user.css';
import Userlogin from "./Userlogin";
import Userregister from "./Userregister";
const User = () => {
  const [toggleMenuBar,setToggleMenuBar] = useState(false);
  const [menus,setMenus] = useState([]);
  const [subMenus,setSubMenus] = useState([]);
  const handelOnClick = (sub)=>{
    setToggleMenuBar(!toggleMenuBar)
    setSubMenus(sub)
  }
  const getmenus =  () => {
    axios.get(`${URL}/getmenus`).then((data) => {
      setMenus(data.data)
    });
  };
  useEffect(()=>{
    getmenus()
  },[])
  console.log(menus);
  console.log(subMenus);
  
  return (
    <BrowserRouter>
         <div className="row" style={{ justifyContent: "center" }}>
           <div className="header">
             <div className="header-wrapper">
               <div className="header-item1">
                 <div className="logo">
                   hi
                 </div>
               </div>
               <div className="header-item2">
                 {
                   menus.map((item,index)=>{
                     if(item.Type === "simplemenu"){
                       return(
                        <li key={index}>{item.CategoryName}</li>
                       )
                     }
                   })
                 }
                 {
                   menus.map((item,index)=>{
                     if(item.Type === "dropdownmenuholder"){
                       return(
                        <li key={index}>{item.CategoryName}</li>
                       )
                     }
                   })
                 }
                 {
                   menus.map((item,index)=>{
                     if(item.Type === "megamenuholder"){
                       return(
                         <>
                        <li 
                        key={index} 
                        onClick={() =>handelOnClick(item.SubCategory)}
                        >{item.CategoryName}</li>
                        
                          </>
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
                    return(<li key={index}>{item.Name}</li>)
                  })
                }
              </div> : null
            }
          </div>
          
        </div>
        <Switch>
          <Route path="/userregister" component={Userregister} />
          <Route path="/userlogin" component={Userlogin} />
        </Switch>
      </BrowserRouter>
  );
};

export default User;

// import React, { Component } from "react";
// import { Switch, BrowserRouter, Router, Route, Link } from "react-router-dom";
// import Userlogin from "./Userlogin";
// import Userregister from "./Userregister";
// import './user.css'
// export default class User extends Component {
//   constructor() {
//     super();
//     this.state = {
//       toggleMenuBar:false,
//     }
//   }
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="row" style={{ justifyContent: "center" }}>
//           <div className="header">
//             <div className="header-wrapper">
//               <div className="header-item1">
//                 <div className="logo">
//                   hi
//                 </div>
//               </div>
//               <div className="header-item2">
//                 <li onClick={()=>this.setState(!this.toggleMenuBar)}>item1</li>
//                 <li onClick={()=>this.setState(!this.toggleMenuBar)}>item2</li>
//                 <li onClick={()=>this.setState(!this.toggleMenuBar)}>item3</li>
//                 <li onClick={()=>this.setState(!this.toggleMenuBar)}>item4</li>
//                 <li onClick={()=>this.setState(!this.toggleMenuBar)}>item5</li>
//               </div>
//               <div className="header-item3">
//                 bye
//               </div>
//             </div>
//             {
//               this.state.toggleMenuBar ? <div className="sub-header"></div> : null
//             }
//           </div>
          
//         </div>
//         <Switch>
//           <Route path="/userregister" component={Userregister} />
//           <Route path="/userlogin" component={Userlogin} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

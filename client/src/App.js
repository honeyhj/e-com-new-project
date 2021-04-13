import React, { Component, useEffect } from "react";
import { Switch, BrowserRouter, Router, Route } from "react-router-dom";
import Admin from "./Component/Admin/Admin";
import User from "./Component/User/User";
import Adminlogin from "./Component/User/Adminlogin";
import {fetchProduct} from './Actions/ProductActions';
import { connect, useDispatch } from "react-redux";



  function App() {
    useEffect(()=>{
fetchProduct();

    },[])
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admindashboard" component={Admin} />
          <Route path="/admin" component={Adminlogin} />
          <Route path="/" component={User} />
        </Switch>
      </BrowserRouter>
    );
  
}
export default connect(null,{fetchProduct})(App);
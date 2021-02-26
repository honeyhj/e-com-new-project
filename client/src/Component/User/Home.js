import React, { useState } from 'react';
import Header from './Header';
import ProductDetailsPage from './ProductDetailsPage';
import ProductShow from './ProductShow';
import ShowCase from './ShowCase';
import TopHeading from './TopHeading';

const Home = () => {
const [term,setTerm]=useState("")
const setterm=(data)=>{
    console.log(data ,'kibria')
    setTerm(data)
    
}
    
    return (
        <>
           
            <TopHeading></TopHeading>
            <ShowCase set={setterm}></ShowCase>
            <ProductShow termset={term}></ProductShow>
        </>
    );
};

export default Home;
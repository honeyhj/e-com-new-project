import axios from 'axios';
import Products from '../Actions/Products'
import URL from '../Component/User/Url';
import * as types from '../Actions/Types'
const initialstate={
    loading:false,
    products:[],
    error:""
}
const ProductReducer=(state=initialstate,action)=>{
switch (action.type){
    case  types.PRODUCT_REQUEST:{
        return {
            ...state,
            loading:true
        }
    }
    case  types.PRODUCT_SUCCESS:{
        return {
            ...state,
            loading:false,
            products:action.payload
        }
    }
    case  types.PRODUCT_FAILURE:{
        return {
            ...state,
            loading:false,
            products:[],
            error:action.payload
        }
    }
    default:return state;
}
}

export default ProductReducer;
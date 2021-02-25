import axios from 'axios'
import { Product } from '../../../model/Product'
import * as Types from './Types'
export const fetchProduct=()=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:Types.PRODUCT_REQUEST,
            })
            const res = await axios.get('/get-products',(req, res)=>{
                Product.find()
            })
            dispatch({
                type:Types.PRODUCT_SUCCESS,
                payload:res.data.data
            })
        } catch (error) {
            dispatch({
                type:Types.PRODUCT_FAILURE,
                payload:error.message
            })
        }
    }
}
import axios from 'axios'
import URL from '../Component/User/Url'
import * as Types from './Types'
export const fetchProduct=()=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:Types.PRODUCT_REQUEST,
            })
            const res = await axios.get(`${URL}/get-products`,{headers:{
                'content-type':'application/json'
            }});
            console.log('res',res)
            dispatch({
                type:Types.PRODUCT_SUCCESS,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:Types.PRODUCT_FAILURE,
                payload:error.message
            })
        }
    }
}
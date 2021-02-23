import axios from 'axios';
import Products from '../Actions/Products'
import URL from '../Component/User/Url';
const ProductShow=async(initialstate={products:[]},action)=>{

    if(action.type===Products.Fetch){
      
        await  axios.post(`${URL}/get-products`,
        action.payload,{
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        .then(data=>{
            if(data.data.success){
                console.log('loadmore true',data.data)
                // console.log(data.data.postSize);
                // const  update=products.concat(data.data.product)
                // setProducts(update)
                // setpSize(data.data.postSize)
                //  setLoadMores(false)

                // return{products:[...initialstate.products,data.data.product]}
            }
           else{
                // setProducts(data.data.product)
                // setpSize(data.data.postSize)
                console.log(data.data.product,'lool');
                //  setLoadMores(false)
            }
        })
    }


}

export default ProductShow;
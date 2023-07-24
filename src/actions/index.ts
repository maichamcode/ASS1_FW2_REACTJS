import { instance } from "../axios/instance";
import { pause } from "../utils/pause"



export const fetchProduct = ()=>async(dispatch:any)=>{
    //isLoading: true
    dispatch({type:'product/fetching'})
    try {
        await pause(1000);
        const data = await instance.get("/products");
        dispatch({type:'product/fetchingSuccess',payload:data})
    } catch (err:any) {
        dispatch({type:'product/fetchingFailed',payload:err.message})
    } finally {
        dispatch({type:'product/fetchingFinally'})
    }
}
//ad
export const addProduct = (product:any)=>async(dispatch:any)=>{
    try {
        const data = await instance.post("/products",product);
        dispatch({type:"product/addProduct",payload:data})
    } catch (error) {
        console.log(error);
        
    }
}
//delete
export const deleteProduct = (product:any)=>async(dispatch:any)=>{
    try {
        await instance.delete(`/products/${product.id}`);
        dispatch({type:"product/deleteProduct",payload:product.id})
    } catch (error) {
        console.log(error);
        
    }
}
//update
export const updateProduct = (product:any)=>async(dispatch:any)=>{
    try {
        const data = await instance.put(`/products/${product.id}`,product);
        dispatch({type:"product/updateProduct",payload:data})
    } catch (error) {
        console.log(error);
        
    }
}
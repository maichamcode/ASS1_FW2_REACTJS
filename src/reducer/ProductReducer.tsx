import { produce } from "immer"


const initState = {
  products:[],
  isLoading:true,
  error:""
} as {products:any[],isLoading:boolean,error:string}


export const ProductReducer = (state=initState,action:any)=>{
  return produce(state,draftState=>{
      switch (action.type) {
        //fetching
        case 'product/fetching':
          draftState.isLoading = true;
          break;
        case 'product/fetchingSuccess':
          draftState.products = action.payload;
          break;
        case 'product/fetchingFailed':
          draftState.error = action.payload;
          break;
        case 'product/fetchingFinally':
          draftState.isLoading = false;
          break;
        //add
        case 'product/addProduct':
          draftState.products.push(action.payload)
          break;
        //update
        case 'product/updateProduct':
          const product = action.payload;
          draftState.products = state.products.map((item:any)=>item.id === product.id ? product : item)
          break;
        //delete
        case 'product/deleteProduct':
          const id = action.payload;
          draftState.products = state.products.filter((item:any)=>item.id !== id)
          break;
        default:
          return state;
      }
  })
}
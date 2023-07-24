import { produce } from "immer"


const initState = {
    items:[]
} as {items:any[]}
export const CartReduce = (state=initState,action:any)=>{
    return produce(state,draftState=>{
        switch (action.type) {
            case 'cart/add':
                const checkCart = draftState.items.findIndex((item:any)=>item.id === action.payload.id);
                if(checkCart === -1){
                    draftState.items.push(action.payload)
                }else{
                    draftState.items[checkCart].quantity++;
                }
                break;
            //Up
            case 'cart/up':
                draftState.items.find(item=>item.id == action.payload).quantity++
                break;
            //down
            case 'cart/down':
                const product = draftState.items.find(item=>item.id == action.payload);
                product.quantity--;
                //check
                if(product.quantity < 1){
                    const confirm = window.confirm("Ban co muon xoa san pham?");
                    if(confirm) draftState.items = draftState.items.filter((item:any)=>item.id!==product.id)
                    product.quantity =1
                }
                break;
            default:
                break;
        }
    })
}
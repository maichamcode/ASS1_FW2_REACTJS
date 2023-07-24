import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct, fetchProduct, updateProduct } from "../../actions";
import Button from "../Button";





const ProductList = () => {
    const dispatch:Dispatch<any> = useDispatch();
    const {products,isLoading} = useSelector((state:any)=>state.products);
    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    if(isLoading) return <span>Loading...</span>
  return (
    <div>
      
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Add Cart</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {products?.map((item:any)=>{
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>    
                        <td>
                            <Button type="danger" onClick={()=>dispatch(deleteProduct({id:4}))}>
                                Delete
                            </Button>
                            <Button type="success" onClick={()=>dispatch(updateProduct({name:"Iphone 15 pro",price:500,id:4}))}>
                                Update
                            </Button>
                        </td>    
                        <td>
                            <Button type="primary" onClick={()=>dispatch({type:'cart/add',payload:{...item,quantity:1}})} >
                                Add to Cart
                            </Button>
                        </td>             
                    </tr>
                })}
            </tbody>
        </table>
        <Button type="primary" onClick={()=>dispatch(addProduct({name:'Iphone 14 pro',price:400}))}>ADD Product</Button>
    </div>
  )
}

export default ProductList
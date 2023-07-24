import { useDispatch, useSelector } from "react-redux"
import Button from "../Button";



const Cart = () => {
    const dispatch = useDispatch();
    const {items} = useSelector((state:any)=>state.carts)
    
  return (
    <div>
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Up</th>
                    <th>Down</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {items?.map((item:any)=>{
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>   
                        <td>{item.quantity}</td> 
                       <td>
                       <Button type="primary" onClick={()=>dispatch({type:'cart/up',payload:item.id})}>
                            +
                        </Button>
                       </td>
                       <td>
                       <Button type="danger" onClick={()=>dispatch({type:'cart/down',payload:item.id})}>
                            -
                        </Button>
                       </td>
                       <td>
                            {item.price * item.quantity}
                       </td>
                                   
                    </tr>
                })}
            </tbody>
        </table>
        Total All: 
        {items.reduce(function(sum:any,item:any){
            return sum + item.price * item.quantity
        },0)}
    </div>
  )
}

export default Cart
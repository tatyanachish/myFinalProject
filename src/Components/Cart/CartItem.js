import { useDispatch } from "react-redux";
import { dataCakes } from "../../Data/dataCakes";
import { removeItemFromCart } from "../../Redux/cartSlice";
import bin from './bin.png'

const CartItems = ({cartItem}) => {
    const cakes = dataCakes.find(item => item.id === cartItem.cakeId)
    const dispatch = useDispatch()   
    return(        
        <div>
            <p>{cartItem.quantity} {cakes.name}</p>          
            <p>Price: ${cakes.price*cartItem.quantity}</p>                    
            <span onClick={()=> dispatch(removeItemFromCart({cartItemId:cartItem.id}))}><img src={bin} alt='bin' width='40px' /></span>
        </div>
    )
}
export default CartItems;
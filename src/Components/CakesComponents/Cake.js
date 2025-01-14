import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Cake = ({cake}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div>
            <p><strong>{cake.name}</strong></p>            
            <img src={`${cake.img}.jpg`} alt='photo' width='200px'/>
            <p>$: {cake.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={()=>{dispatch(addItemToCart({cake,quantity}))}}>ADD TO CART</button>
        </div>
    )
}
export default Cake;
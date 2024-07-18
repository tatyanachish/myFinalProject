import { useSelector } from 'react-redux';
import cart from './cart.png';
import CartItems from './CartItem';
import { getCartItems } from '../../Redux/cartSlice';
const Cart = () => {
    const cartItems = useSelector(getCartItems)
    return(
        <div>
            <h3>Your cart</h3>
            <img src={cart} width='70px'/>
            {cartItems.map(cartItem => <CartItems cartItem={cartItem} /> )}
            <CartItems/>
            
        </div>
    )
}
export default Cart;
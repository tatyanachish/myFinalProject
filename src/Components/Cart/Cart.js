import { useSelector } from 'react-redux';
import cart from './cart.png';
import CartItems from './CartItem';
import { getCartItems, getTotalPrice } from '../../Redux/cartSlice';
const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div>
            <p><strong>Your cart</strong></p>
            <img src={cart} width='70px' alt=' '/>
            <p><strong>Total: {totalPrice}$</strong></p>
            {cartItems.map(cartItem => <CartItems key={cartItem.id} cartItem={cartItem} /> )}           
        </div>
    )
}
export default Cart;

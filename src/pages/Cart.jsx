import { useContext } from "react";
import {useNavigate} from 'react-router-dom';

import CartItem from "../components/CartItem"
import Header from "../components/Header";

import { CLEAR_CART } from "../actions/action-types/cart";
import { CartContext } from "../contexts/Cart";
// import { AuthContext } from '../contexts/Auth';


const Cart = () => {
    const {cart, dispatchCartAction} = useContext(CartContext);
    // const authContext = useContext(AuthContext);
    const navigate = useNavigate()


    let totalAmount = 0;
    cart.forEach(item => totalAmount += (item.price * item.quantity))


   
    return (
        <>
            <Header />
            <div className="account-setting__content">
                <div className="account-setting__content__title">
                    <h4>Product list in your cart</h4>
                </div>
                <div className="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>PRODUCT NAME</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <CartItem key={item._id} item = {item} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 className="total-price">
                    You Total Price Will be $ {totalAmount}
                </h2>
                <div style = {{display: 'flex', justifyContent: 'space-around'}}>
                    <div className="mt-50">
                    <button onClick = {() => dispatchCartAction({type: CLEAR_CART})}type="button" className="">Clear Cart</button>
                    </div>
                    <div className="mt-50">
                        <button  onClick = {() => navigate('/order-placing-form')}type="button" className="">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

// disabled = {!authContext.isLoggedIn}

export default Cart
import { useSelector, useDispatch } from "react-redux";

import Nav from "../components/Nav";
import CartItem from "../components/CartItem";




const Cart = () => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    let totalAmount = 0;

    cart.forEach(item => totalAmount+= item.quantity * item.price)

    return (
        <>
            <Nav />
            <div className="account-setting__content">
                <div className="account-setting__content__title">
                    <h4>Product list in your cart</h4>
                </div>
                <div className="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>PRODUCT Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <CartItem key = {item.id} item = {item} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 className="total-price">
                    You Total Price Will be $ {totalAmount}
                </h2>
                <div className="mt-50">
                    <button onClick={() => dispatch({type: 'CLEAR_CART'})} type="button" className="btn-big">Clear Cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart
'use client'

import { useSelector, useDispatch } from "react-redux"
import CartItem from "@/components/CartItem";


const Cart = () => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    let totalAmount = 0;

    cart.forEach(item => totalAmount+= item.quantity * item.price);

    const clearHandler = async () => {
        dispatch({type: 'CLEAR_CART'});
        await fetch(`http://localhost:4000/products`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: Date.now() + '',
                title: `New Product -> ${ Math.floor(Math.random() * 10 + 1)}`,
                price:  Math.floor(Math.random() * 10 + 1),
                description: 'DEMO',
                image: "data:image/jpeg;base64,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"
            })
        })

        await fetch(`http://localhost:3000/api/product`)
    }

    return (
        <>
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
                    <button onClick={clearHandler} type="button" className="btn-big">Clear Cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart
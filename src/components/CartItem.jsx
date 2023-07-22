import {useState} from 'react';
import { useDispatch } from 'react-redux';


import {icons} from '../assets'

function CartItem({item}) {
    const [itemQuantity, setItemQuantity] = useState(item.quantity);
    const dispatch = useDispatch()

    

    return (
        <tr>
            <td>
                <div className="product">
                    <img
                        src = {item.image}
                        className="product-img"
                        alt=""
                    />
                    
                </div>
            </td>
            <td><p>{item.title}</p></td>
            <td>$ {item.price}</td>
            <td>
                <div className="qty_input">
                    <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                        onClick={() => {
                            if (itemQuantity > 1) {
                                dispatch({type: 'MODIFY_QUANTITY_OF_AN_ITEM', payload: {id: item.id, quantity: itemQuantity - 1}});
                                setItemQuantity((prev) => prev - 1)
                            } else {
                                alert(`The quantity cannot be lesser than 1`)
                            }
                        }}
                    >
                        <figure>
                            <img src= {icons.minusIcon}  alt = ""/>
                        </figure>
                    </button>
                    <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                       
                        value= {itemQuantity}
                        onChange={(e) => {
                            setItemQuantity(Number(e.target.value));
                            dispatch({type: 'MODIFY_QUANTITY_OF_AN_ITEM', payload: {id: item.id, quantity: Number(e.target.value)}})
                            // console.log(e.target.value);
                        }}
                        min ='1'
                    />
                    <button
                        className="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                        onClick={() => {
                            dispatch({type: 'MODIFY_QUANTITY_OF_AN_ITEM', payload: {id: item.id, quantity: itemQuantity + 1}});
                            setItemQuantity((prev) => prev + 1)
                        }}
                    >
                        <figure>
                            <img  src={icons.plusIcon} alt = ""/>
                        </figure>
                    </button>
                </div>
            </td>
            <td>$  {item.quantity ? item.price * item.quantity : 0}</td>
            <td>
                <img onClick={() => dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: item.id})} className="cross-icon" src = {icons.crossIcon} alt =""/>
            </td>
        </tr>
    )
}

export default CartItem
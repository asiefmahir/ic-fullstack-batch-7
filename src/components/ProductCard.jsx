import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/Cart';
import { ADD_TO_CART } from '../actions/action-types/cart';

function ProductCard({ product }) {
    const navigate = useNavigate()

    const obj = useContext(CartContext);
    console.log(obj);
    return (
        <div onClick={() => navigate(`/products/${product._id}`)} className="ingredient">
            <div className="ingredient__image">
                <figure>
                    <img src={product.image} alt={product.title} />
                </figure>
            </div>
            <div className="ingredient__title">
                <h3>
                    {product.title}
                </h3>
            </div>
            <div className="ingredient__content">
                <p>
                    {product.category}
                </p>
                <p>
                    <span>
                        ${product.price}
                    </span>
                </p>
            </div>
            <div className="ingredient__btn">
                <button onClick={(e) => {
                    e.stopPropagation();
                    obj.dispatchCartAction({ type: ADD_TO_CART, payload: product })
                }} className="btn-white">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default ProductCard
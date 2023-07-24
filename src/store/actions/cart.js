// import { createAction } from "@reduxjs/toolkit";

// export const addToCart = createAction('cart/ADD_TO_CART');
// export const modifyQuantityOfAnItem = createAction('cart/MODIFY_QUANTITY_OF_AN_ITEM');
// export const removeItemFromCart = createAction('cart/REMOVE_ITEM_FROM_CART');
// export const clearCart = createAction('cart/CLEAR_CART');

import {addToCart, removeItemFromCart, modifyQuantityOfAnItem, clearCart} from '../reducers/cart'

export {
    addToCart,
    removeItemFromCart,
    modifyQuantityOfAnItem,
    clearCart
}
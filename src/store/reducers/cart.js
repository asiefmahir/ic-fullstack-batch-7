// export const cartReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_TO_CART' : {
//             const product = state.find(item => item.id === action.payload.id);

//             return product ? state.map(item => {
//                 if (item.id === product.id) {
//                     return {...item, quantity: item.quantity + 1}
//                 }
//                 return item
//             }) : [...state, {...action.payload, quantity: 1}]
//         }

//         case 'REMOVE_ITEM_FROM_CART' :{
//             return state.filter(item => item.id !== action.payload)
//         }


//         case 'MODIFY_QUANTITY_OF_AN_ITEM' : {
//             return state.map(item => {
//                 if (item.id === action.payload.id) {
//                     return {...item, quantity: action.payload.quantity}
//                 }

//                 return item
//             })
//         }

        
//         case 'CLEAR_CART' : {
//             return []
//         }

//         default: {
//             return state
//         }
//     }
// }


// import {createReducer} from '@reduxjs/toolkit';
// import {addToCart, modifyQuantityOfAnItem, removeItemFromCart, clearCart} from '../actions/cart'

// export const cartReducer = createReducer([], (builder) => {
//     builder
//         .addCase(addToCart.type, (state, action) => {
//             const product = state.find(item => item.id === action.payload.id);
//             product ? product.quantity++ : state.push({...action.payload, quantity: 1})
//         })
        
//         .addCase(removeItemFromCart.type, (state, action) => {
//             return state.filter(item => item.id !== action.payload)
//         })

//         .addCase(modifyQuantityOfAnItem.type, (state, action) => {
//             const product = state.find(item => item.id === action.payload.id);
//             product.quantity = action.payload.quantity
//         })

//         .addCase(clearCart.type, (state) => {
//             return []
//         })

//         .addDefaultCase((state) => {
//             return state
//         })
// })

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: [],
    name: 'cart',
    reducers: {
        addToCart(state, action) {
            const product = state.find(item => item.id === action.payload.id);
            product ? product.quantity++ : state.push({...action.payload, quantity: 1})
        },

        removeItemFromCart(state, action) {
            return state.filter(item => item.id !== action.payload)
        },

        modifyQuantityOfAnItem(state, action) { 
            const product = state.find(item => item.id === action.payload.id);
            product.quantity = action.payload.quantity
        },

        clearCart () {
            return []
        }
    }
})

export const {addToCart, removeItemFromCart, modifyQuantityOfAnItem, clearCart} = cartSlice.actions

export const cartReducer =  cartSlice.reducer
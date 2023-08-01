// import { createStore, combineReducers, applyMiddleware } from "redux";
// import {composeWithDevTools} from '@redux-devtools/extension'
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// import { cartReducer } from "./reducers/cart";
// // import { ourMiddleWare } from "./middlewares";
// import logger from 'redux-logger'
// import { postReducer } from "./reducers/post";
// import { todoReducer } from "./reducers/todo";
// import thunk from 'redux-thunk'

// const rootReducer = combineReducers({
//     counter: counterReducer,
//     theme: themeReducer,
//     cart: cartReducer,
//     post: postReducer,
//     todo: todoReducer
// })

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import {cartReducer} from "./reducers/cart";
import { postReducer } from "./reducers/post";
// import todoReducer from './reducers/todo';
import { todoApi } from './reducers/todo';


const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    cart: cartReducer,
    post: postReducer,
    [todoApi.reducerPath]: todoApi.reducer
    
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (gdm) => gdm().concat(todoApi.middleware)
})
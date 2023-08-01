

// export const todoReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'todo/fetchStart' : {
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         }

//         case 'todo/fetchSucceed' : {
//             return {
//                 ...state,
//                 isLoading: false,
//                 todos: action.payload,
//                 errorMessage: ''
//             }
//         }

//         case 'todo/fetchRejected' : {
//             return {
//                 ...state,
//                 isLoading: false,
//                 todos: [],
//                 errorMessage: action.payload
//             }
//         }

//         default : {
//             return state
//         }
//     }
// }
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import {addToCart} from './cart'

// const initState = {
//     isLoading: true,
//     todos: [],
//     errorMessage: ''
// }

// export const fetchTodos = createAsyncThunk(
//     'todo/fetchAll',
//     async () => {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`);
//         const result = await response.json()
//         return result
//     }
// )

// const todoSlice = createSlice({
//     initialState: initState,
//     name: 'todo',
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchTodos.pending, (state, action) => {
//                 state.isLoading = true;
//                 state.todos = [];
//                 state.errorMessage = ''
//             })
//             .addCase(fetchTodos.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.todos = action.payload;
//                 state.errorMessage = ''
//             })
//             .addCase(fetchTodos.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.todos = [];
//                 state.errorMessage = action.error.message
//             })
//             // .addCase(addToCart.type, (state, action) => {
//             //     state.errorMessage = "amader manual error";
//             //     state.todos = []
//             // })
//     }

// })

// export default todoSlice.reducer

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
    reducerPath: 'todo',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:4000/todos`}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => `?_limit=5`,
            providesTags: ['Todos'],
            transformResponse: (res) => {
                return res.sort((a, b) => b.id - a.id)
            }
        }),

        removeTodo: builder.mutation({
            query : (todoId) => ({
                url: `/${todoId}`,
                method: 'DELETE'
            }),

            invalidatesTags: ['Todos']
            
        })
    })
})

export const {useGetAllTodosQuery, useRemoveTodoMutation} = todoApi


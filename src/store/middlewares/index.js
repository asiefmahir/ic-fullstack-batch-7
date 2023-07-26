// export const ourMiddleWare = (store) => (next) => async (action) => {
//     // console.log(store.getState(), 'store');



//     if (typeof action === 'function') {
//         action(store.dispatch)
//     } else {
//         next(action)
//     }
// }


export const fetchPosts = async (dispatch) => {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
        dispatch({ type: 'post/fetchStart' })
        const data = await result.json();
        dispatch({ type: 'post/fetchSucceed', payload: data })
    } catch (err) {
        dispatch({ type: 'post/fetchRejected', payload: err.message })
    }
}

export const fetchTodos = async (dispatch) => {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`);
        dispatch({ type: 'todo/fetchStart' })
        const data = await result.json();
        dispatch({ type: 'todo/fetchSucceed', payload: data })
    } catch (err) {
        dispatch({ type: 'todo/fetchRejected', payload: err.message })
    }
} 


// action -> String -> Object -> Function
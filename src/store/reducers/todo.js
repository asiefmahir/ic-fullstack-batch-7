const initState = {
    isLoading: true,
    todos: [],
    errorMessage: ''
}

export const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case 'todo/fetchStart' : {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'todo/fetchSucceed' : {
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
                errorMessage: ''
            }
        }

        case 'todo/fetchRejected' : {
            return {
                ...state,
                isLoading: false,
                todos: [],
                errorMessage: action.payload
            }
        }

        default : {
            return state
        }
    }
}
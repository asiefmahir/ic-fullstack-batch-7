const initState = {
    isLoading: true,
    posts: [],
    errorMessage: ''
}

export const postReducer = (state = initState, action) => {
    switch(action.type) {
        case 'post/fetchStart' : {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'post/fetchSucceed' : {
            return {
                ...state,
                isLoading: false,
                posts: action.payload,
                errorMessage: ''
            }
        }

        case 'post/fetchRejected' : {
            return {
                ...state,
                isLoading: false,
                posts: [],
                errorMessage: action.payload
            }
        }

        default : {
            return state
        }
    }
}
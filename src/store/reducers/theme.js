const initStateForTheme = {
    bgColor: '#fff',
    color: '#000'
}

export const themeReducer = (state = initStateForTheme, action) => {
    switch(action.type) {
        case 'theme/toggleBgColor' : {
            return {
                ...state,
                bgColor: action.payload
            }
        }

        case 'theme/toggleTextColor' : {
            return {
                ...state,
                color: action.payload
            }
        }

        case 'theme/reset' : {
            return initStateForTheme
        }

        default: {
            return state
        }
    }
}
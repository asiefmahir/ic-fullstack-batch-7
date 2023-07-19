export const counterReducer = (state = 10, action) => {
    switch(action.type) {
        case 'counter/increase' : {
            return state + action.payload
        }

        case 'counter/decrease' : {
            return state -  action.payload
        }

        default: {
            return state
        }
    }
}
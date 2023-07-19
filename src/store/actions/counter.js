// action creators

export const counterIncrease = (payload) => {
    return {
        type: 'counter/increase',
        payload: payload
    }
}

export const counterDecrease = (payload) => {
    return {
        type: 'counter/decrease',
        payload: payload
    }
}
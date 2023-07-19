export const changeBgColor = (bgColor) => {
    return {
        type: 'theme/toggleBgColor',
        payload: bgColor
    }
}

export const changeFontColor = (color) => {
    return {
        type: 'theme/toggleTextColor',
        payload: color
    }
}

export const resetTheme = () => {
    return {
        type: 'theme/reset'
    }
}
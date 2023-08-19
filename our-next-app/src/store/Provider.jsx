'use client'
import { store } from "./index";
import {Provider} from 'react-redux'

export const ReduxWrapper = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}
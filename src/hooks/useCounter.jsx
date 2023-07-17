import { useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState(100);
    const increaseHandler = () => {
        setCounter(prev => prev + 1)
    }

    const decreaseHandler = () => {
        setCounter(prev => prev - 1)
    };

    return {
        counter,
        increaseHandler,
        decreaseHandler
    }
}
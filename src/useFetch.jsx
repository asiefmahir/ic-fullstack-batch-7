import { useState, useEffect } from "react";

// useState -> use State -> hook
// useReducer -> use Reducer -> hook
// useContext -> use Context -> hook
// useCallback -> use Callback -> hook

// useFetchLogic -> custom hook

export const useFetchLogic = (url, initState) => {
    const [data, setData] = useState(initState);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                setIsLoading(false);
                setErrorMessage('');
                setData(result)
            })
            .catch((err) => {
                setIsLoading(false);
                setData(initState);
                setErrorMessage(err.message)
            })
    }, []);

    return {
        data,
        isLoading, 
        errorMessage
    }
}
import {useState, useEffect, useCallback, useMemo, createContext} from 'react';
import { redirect } from 'react-router-dom';

let logoutTimer;

export const AuthContext = createContext();

const calculateRemainingTime = (expTime) => {
    const currentTime = new Date().getTime();
    const expireTime = new Date(expTime).getTime();
    const remainingTime = expireTime - currentTime;
    return remainingTime
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const storedExpirationTime = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationTime);

    if (remainingTime <= 10000) {
        localStorage.removeItem('token')
        localStorage.removeItem('user');
        localStorage.removeItem('expirationTime');
        redirect('/')
        return null
    }

    return {
        token: storedToken,
        user: user,
        duration: remainingTime
    }
}


const AuthProvider = ({children}) => {
    const tokenData = retrieveStoredToken();

    let initToken;
    let initUser;

    if (tokenData) {
        initToken = tokenData.token;
        initUser = tokenData.user
    }

    const [token, setToken] = useState(initToken);
    const [user, setUser] = useState(initUser);

    const isUserLoggedIn = !!token


    const logoutHandler = useCallback(() => {
        console.log('called');
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expirationTime');

        redirect('/')

        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }, [])

    const loginHandler = useCallback((token, user, expirationTime) => {
        console.log(token);
        console.log(user);
        setToken(token);
        setUser(user)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('expirationTime', expirationTime);
        const remainingTime = calculateRemainingTime(expirationTime)

        logoutTimer = setTimeout(logoutHandler, remainingTime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const contextValue = useMemo(() => (
        {
            token: token,
            user: user,
            isUserLoggedIn: isUserLoggedIn,
            login: loginHandler,
            logout: logoutHandler
        }
    ), [isUserLoggedIn, loginHandler, logoutHandler, token, user])
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
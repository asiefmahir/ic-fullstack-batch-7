import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

export default function PrivateUserRoute ({children}) {
    const authContext = useContext(AuthContext)
    const isLoggedIn = authContext.isUserLoggedIn;

    return isLoggedIn ? children : <Navigate to='/'/>
}
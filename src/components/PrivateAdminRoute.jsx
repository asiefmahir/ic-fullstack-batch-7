import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';
export default function PrivateAdminRoute({ children }) {
    const authContext = useContext(AuthContext)
    const isLoggedIn = authContext.isUserLoggedIn;
    const role = authContext?.user?.role;

    return (isLoggedIn && (role && (role === 'admin' || role === 'super-admin'))) ? children : <Navigate to="/" />;
}
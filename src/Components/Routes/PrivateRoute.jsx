import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({children}) => {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    if(!isAuth) {
        return <Navigate to="/" />
    }
    return children;
}

export default PrivateRoute;
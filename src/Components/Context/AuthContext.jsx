import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [ isAuth, setIsAuth ] = useState(false);

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }
    
    const loginDetails = "massai@school.com";

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth, loginDetails }}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;
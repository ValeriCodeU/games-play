import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as autService from '../services/authService'
import Path from "../../paths"
import usePersistedState from "../hooks/usePersistedState";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    // const [auth, setAuth] = useState(() => {
    //     localStorage.removeItem('accessToken');

    //     return {};
    // });
    const [auth, setAuth] = usePersistedState('auth', {});

    const navigate = useNavigate();

    const loginSubmitHandler = async values => {
        //console.log(values);

        const response = await autService.login(values.email, values.password);

        console.log(response.accessToken);

        localStorage.setItem('accessToken', response.accessToken);
        setAuth(response);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async values => {
        const result = await autService.register(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.email
    };



    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
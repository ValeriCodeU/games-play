import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import AuthContext from "./contexts/AuthContext"
import * as autService from './services/authService'
import Path from "../paths"

import GameCreate from "./components/game-create/GameCreate"
import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import HomePage from "./components/home/HomePage"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"

function App() {

    //To be moved to a more appropriate place
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const loginSubmitHandler = async values => {
        //console.log(values);

        const response = await autService.login(values.email, values.password);

        //console.log(response);
        setAuth(response);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async values => {
        const result = await autService.register(values.email, values.password);

        setAuth(result);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
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
            <>
                <Header />
                <Routes >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/create" element={<GameCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games/:gameId" element={<GameDetails />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </>
        </AuthContext.Provider>
    )
}

export default App

import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"
import Path from "../paths"

import GameCreate from "./components/game-create/GameCreate"
import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import HomePage from "./components/home/HomePage"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"
import GameEdit from "./components/game-edit/GameEdit"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {

    return (
        <ErrorBoundary>            
            <AuthProvider>
                <>
                    <Header />
                    <Routes >
                        <Route path="/" element={<HomePage />} />
                        <Route path="/games" element={<GameList />} />
                        <Route path="/create" element={<GameCreate />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/games/:gameId" element={<GameDetails />} />
                        <Route path={Path.GameEdit} element={<GameEdit />} />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Routes>
                </>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App

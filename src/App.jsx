import GameCreate from "./components/game-create/GameCreate"
import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import HomePage from "./components/home/HomePage"
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {

  return (
    <>

      <Header />

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/create" element={<GameCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

import GameCreate from "./components/game-create/GameCreate"
import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import HomePage from "./components/home/HomePage"
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"

function App() {

  return (
    <>

      <Header />

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/create" element={<GameCreate />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

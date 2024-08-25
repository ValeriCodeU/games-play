import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import HomePage from "./components/home/HomePage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>

      <Header />

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GameList />} />
      </Routes>
    </>
  )
}

export default App

import GameCreate from "./components/game-create/GameCreate"
import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import HomePage from "./components/home/HomePage"
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"
import { useState } from "react"
import AuthContext from "./contexts/authContext"

function App() {

  //To be moved to a more appropriate place
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (

    <AuthContext.Provider value={{loginSubmitHandler}}>
      <>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/create" element={<GameCreate />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
        </Routes>
      </>
    </AuthContext.Provider>
  )
}

export default App

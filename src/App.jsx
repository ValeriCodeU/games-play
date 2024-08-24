import Header from "./components/header/Header"
import HomePage from "./components/home/HomePage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
     
      <Header />

      <Routes >
        <Route path="/"  element={<HomePage />}/>
      </Routes>    
    </>
  )
}

export default App

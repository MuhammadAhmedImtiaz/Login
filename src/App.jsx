import React from "react"
import { createBrowserRouter } from "react-router"
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Hero.jsx' 
import Navbar from "./Pages/Navbar.jsx"
import Footer from './Pages/Footer.jsx'
import { Routes, Router ,Route } from "react-router"
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/Footer" element={<Footer/>}/>

    </Routes>
    </>
  )
}

export default App



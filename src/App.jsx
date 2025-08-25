import React from "react"
import { createBrowserRouter } from "react-router"
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Hero.jsx' 
import Navbar from "./Pages/Navbar.jsx"
import Footer from './Pages/Footer.jsx'
import Products from './Pages/Products.jsx'
import Products2 from './Pages/Products2.jsx'
import { Routes, Router ,Route } from "react-router"
import ProductDetails from "./Pages/ProductDetails.jsx"
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Products2" element={<Products2/>}/>
      <Route path="/ProductDetails"element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App



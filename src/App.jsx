import React from "react"
import { createBrowserRouter } from "react-router"
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import { Link, Routes, Router ,Route } from "react-router"
function App() {
  

  return (
    <>
    <Login/>
    {/* <Router>
      <Link to ="/signup">
      <button>Sign Up</button>
      </Link>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
      </Routes>
      </Router> */}
      <Signup/>


    </>
  )
}

export default App

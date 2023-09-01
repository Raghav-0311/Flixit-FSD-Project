import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Flixit from './pages/Flixit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Flixit />}/>
        <Route exact path = "/login" element = {<Login />}/>
        <Route exact path = "/signup" element = {<Signup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


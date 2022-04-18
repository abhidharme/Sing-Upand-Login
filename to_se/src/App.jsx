import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import { Products } from './Components/Products'
import { SignUp } from './Components/SignUp'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/product' element={<Products/>} />
        <Route path='/' element={<SignUp/>} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App

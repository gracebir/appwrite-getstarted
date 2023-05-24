import React from 'react'
import { Routes, Route } from 'react-router'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Todos from './components/Todos'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/todos' element={<Todos/>}/>
    </Routes>
  )
}

export default App


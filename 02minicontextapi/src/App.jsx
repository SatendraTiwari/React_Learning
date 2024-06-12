import './App.css'
import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './compotent/Login'
import Profile from './compotent/Profile'


function App() {

  return (
    <UserContextProvider>
      <h3>Wellcome to Univers of React </h3>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

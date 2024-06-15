import React from 'react'
import Profile from './Pages/Profile/Profile'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* Login sign up logic */}
      <Routes>
        <Route path = '/user/:username' element = {<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
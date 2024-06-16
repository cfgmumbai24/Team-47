import React from 'react'
import Profile from './Pages/Profile/Profile'
import Palak from './Pages/Palak/Palak'
import Goats from './Pages/Goats/Goats'
import Analysis from './Pages/Analysis/Analysis'
import GoatInfo from './Pages/GoatInfo/GoatInfo'
import { Routes, Route } from 'react-router-dom'
import VisitForm from './Pages/VisitForm/VisitForm'

const App = () => {
  return (
    <div>
      {/* Login sign up logic */}
      <Routes>
        <Route path = '/user/:username' element = {<Profile/>}/>
        <Route path = '/user/:username/palaks' element = {<Palak/>} />
        <Route path = '/user/:username/:id' element = {<Goats/>} />
        <Route path = '/user/:username/analysis' element = {<Analysis/>} />
        <Route path = '/user/:username/:id/:goat' element = {<GoatInfo/>} />
        <Route path = '/user/:username/:id/:goat/visit' element = {<VisitForm/>}/>
      </Routes>
    </div>
  )
}

export default App
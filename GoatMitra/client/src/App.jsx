import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Login from './Pages/login/Login.jsx'
import Signup from './Pages/signup/Signup.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import PrivateRouteuser from './Components/PrivateRoute/Private.jsx'
import { Provider } from 'react-redux'
import store from './Store.js'
import GoatPage from './Pages/goatPage/GoatPage.jsx'
import GoatPalak from './Pages/Goatpalak/Goatpalak.jsx'
import Goat from './Pages/individualGoat/Goat.jsx'
import Sidebar from './Components/sidebar/Sidebar.jsx'

function App() {

  return (
    <>
    <Provider store={store}>
    <Sidebar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='' element={<PrivateRouteuser />} >
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path='/goatPalak' element={<GoatPalak/>} />  
      <Route path='/goatPalak/:id' element={<GoatPage/>} />
      <Route path='/goat/:id' element={<Goat/>} />
      </Route>
    </Routes>
    </Provider>
    </>
  )
}

export default App

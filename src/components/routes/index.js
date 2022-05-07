// library
import React from 'react'
import { BrowserRouter, Routes as Router, Route, Navigate } from 'react-router-dom' // react router v6
// pages
import Home from '../../pages/home'
import Profil from '../../pages/profil'

// route
const index = () => {
return(
  <BrowserRouter>
    <Router>
      <Route path="/" exact element={<Home/>} />
      <Route path="*" element={<Navigate to="/" replace/>}/>
      <Route path="/profil"  element={<Profil/>} />
    </Router>
  </BrowserRouter>
  )
}
export default index

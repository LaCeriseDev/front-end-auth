// library
import React from 'react'
import { BrowserRouter, Routes as Router, Route, Navigate } from 'react-router-dom' // react router v6
// pages
import Home from '../../pages/home'
import Page from '../../pages/page'

// route
const index = () => {
return(
  <BrowserRouter>
    <Router>
      <Route path="/" exact element={<Home/>} />
      <Route path="*" element={<Navigate to="/" replace/>}/>
      <Route path="/Page"  element={<Page/>} />
    </Router>
  </BrowserRouter>
  )
}
export default index

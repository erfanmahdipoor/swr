import React from 'react'
import Navbarcomponets from '../../components/navbar/Navbar.componets'
import { Route,Routes } from 'react-router-dom'
import LandingPage from '../landing-page/LandingPage'
import BestPostPage from '../bestPostPage/BestPostPage'
const homePage = () => {
  return (
    <div>
        <Navbarcomponets/>
        
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/bestPost' element={<BestPostPage/>}></Route>
        </Routes>
    </div>
  )
}

export default homePage
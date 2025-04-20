import React from 'react'
import './dashboardLayout.scss'

import HeaderComponent from '../../components/layoutsComponents/headerComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../components/layoutsComponents/navbarComponent/NavbarComponent'
import FooterComponent from '../../components/layoutsComponents/footerComponent/FooterComponent'


export default function DashboardLayout() {
  return (
    <div className='container'>
        <HeaderComponent/>

        <NavbarComponent/>
            {/* <div className='outlet-container'> */}
            <Outlet/>
            {/* </div> */}
        <FooterComponent/> 
    </div>
  )
}

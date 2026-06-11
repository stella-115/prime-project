
// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../component/block"
import Footer1 from "../component/block/Footer1"

const HomeLayout = () => {
  return (
    <div>

        <Header/>

        <Outlet/>

        <Footer1/>
      
    </div>
  )
}

export default HomeLayout

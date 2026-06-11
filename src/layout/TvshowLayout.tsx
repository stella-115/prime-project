// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../component/block"

const TvshowLayout = () => {
  return (
    <div>
        <Header/>

        <Outlet/>

        <Footer/>
      
    </div>
  )
}

export default TvshowLayout

// import React from 'react'

import { Outlet } from "react-router-dom"
import Footer3 from "../component/block/Footer3"

const CreateLayout = () => {
  return (
    <div>
        <Outlet/>
        <Footer3/>
  
    </div>
  )
}

export default CreateLayout
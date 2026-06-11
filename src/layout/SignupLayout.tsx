// import React from 'react'

import { Outlet } from "react-router-dom"
import Footer2 from "../component/block/Footer2"
// import { Footer } from "../component/block"

const SignupLayout = () => {
  return (
    <div>
        <Outlet/>
        <Footer2/>
    </div>
  )
}

export default SignupLayout
// import React from 'react'

import { NavLink } from "react-router-dom";
import logo from "./../../assets/pv_logo.png";

const Footer1 = () => {
  return (
     <footer className="w-full  bg-[#222222] py-6">
      <div className="flex justify-center"> 
    <img src={logo} alt="" className="text-white w-30 my-6" />

      </div>

    <div className="flex justify-center gap-3">

         <h1 className="text-[#02A9E0]"> Terms and Privacy Notice </h1>
      
      <NavLink to="/joinprime">
         <h1 className="text-[#02A9E0] "> Send us feedback </h1>
      </NavLink>
     
      
      <NavLink to="/help">
      <h1 className="text-[#3CB6FE]"> Help </h1>

     </NavLink>

     
      
     
    </div>
    <h1 className="text-[#8197A4] flex justify-center"> © 1996-2026, Amazon.com, Inc. or its affiliates </h1>
    </footer>
  )
}

export default Footer1
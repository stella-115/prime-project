

// import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "./../../assets/pv_logo.png";

const Footer = () => {
  return (
    <footer className="w-full  bg-black pb-5">
      <div className="flex justify-center"> 
    <img src={logo} alt="" className="text-white w-30 " />

      </div>

    <div className="flex justify-center gap-3">
      <h1 className="text-[#3CB6FE]"> Terms and Privacy Notice </h1>
      <NavLink to="/joinprime">
         <h1 className="text-[#3CB6FE]"> Send us feedback </h1>
      </NavLink>
     <NavLink to="/help">
      <h1 className="text-[#3CB6FE]"> Help </h1>

     </NavLink>
      
      <h1 className="text-[#8197A4]"> © 1996-2026, Amazon.com, Inc. or its affiliates </h1>
     
    </div>
    </footer>
  )
}

export default Footer

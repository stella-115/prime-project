// import React from 'react'

import { NavLink } from "react-router-dom"

const Footer3 = () => {
  return (
     <div className="my-8">
      <h1 className=" border text-[#D5D9D9] border-[#D5D9D9] mt-10 ml-6  ">
        <hr/>   
        </h1>
        <div className="flex justify-center gap-5 mt-10">
      <h1 className="text-[#0b527bf9] text-[13px] hover:underline hover:text-[#373a3b]"> Terms and Privacy Notice </h1>
      <h1 className="text-[#0b527bf9] text-[13px] hover:underline hover:text-[#373a3b]"> Send us feedback </h1>
     <NavLink to="/help">
      <h1 className="text-[#0b527bf9] text-[13px] hover:underline hover:text-[#373a3b]"> Help </h1>

     </NavLink>
      
      </div>
        <h1 className="text-[#373a3b] text-[12px] flex justify-center mt-3"> © 1996-2026, Amazon.com, Inc. or its affiliates </h1>

    </div>

  )
}

export default Footer3
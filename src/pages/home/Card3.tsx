// import React from 'react'

import { NavLink } from "react-router-dom"

const Card3 = () => {
  return (
    
    <div className="w-full min-h-screen">
    <div className=" bg-[url('src/assets/img/hero/ani3.jpg')] bg-center bg-cover">
    <div className=" md:hidden lg:hidden bg-[url('/imgs/ani3.jpg')] w-full h-80 bg-right bg-cover"></div>
    <div className="md:w-150 w-80 h-100 md:h-150 bg-[#000000f8] flex justify-center">
      <div className="md:pl-20 pl-5 pt-8 md:pt-13">
        <h1 className=" text-white md:text-[50px] text-[30px] font-bold leading-15">
         Download and go
        </h1>
        <h1  className=" text-white md:text-[20px] text-[16px] mt-4 md:mt-12 ">
         Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.
        </h1>
        <NavLink to="/joinprime">
        <button className="md:w-80 w-70 h-12 md:h-15 bg-white rounded-[10px] md:mt-12 mt-6 font-bold md:text-[18px] ">
          Start your free trail
        </button>
           
        </NavLink>
       

       


      </div>
    
    </div>
      

      
    </div>
    </div>
  )
}

export default Card3
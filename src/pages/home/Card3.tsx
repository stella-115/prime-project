// import React from 'react'

import { NavLink } from "react-router-dom"

const Card3 = () => {
  return (
    
    <div className="w-full md:h-screen bg-black">
    <div className=" bg-[url('/imgs/ani3.jpg')] bg-center bg-cover">
    <div className=" md:hidden lg:hidden bg-[url('/imgs/ani3.jpg')] w-full h-80 bg-right bg-cover"></div>
    <div className="md:w-150 w-full h-80 md:h-150 bg-[#000000f8] flex justify-center">
      <div className="md:pl-20  pt-8 md:pt-13 md:w-150 w-[90%] ">
        <h1 className=" text-white md:text-[50px] text-[30px] font-bold leading-15  md:flex-none md:justify-normal flex justify-center">
         Download and go
        </h1>
        <h1  className=" text-white md:text-[20px] text-[16px] mt-4 md:mt-12   md:flex-none md:justify-normal flex justify-center">
         Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.
        </h1>
        <div className="md:flex-none md:justify-normal flex justify-center">
           <NavLink to="/joinprime">
        <button className="md:w-80 w-70 h-12 md:h-15 bg-white rounded-[10px] md:mt-12 mt-6 font-bold md:text-[18px] ">
          Start your free trail
        </button>
           
        </NavLink>

        </div>
       
       

       


      </div>
    
    </div>
      

      
    </div>
    </div>
  )
}

export default Card3
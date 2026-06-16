
// import React from 'react'

// import { useState } from "react"
import { NavLink } from "react-router-dom"


const Hero = () => {
  
  
  return (

    <div className="w-full min-h-screen bg-black md:flex justify-center ">
       <div className=" md:w-[95%] md:mt-15 pt-12 md:pt-0">
       <div className=" md:w-full  md:h-150 bg-[url('public/hhero.jpg')] md:bg-center md:bg-cover ">
       <div className="md:hidden lg:hidden w-full bg-cover bg-right h-60 bg-[url('public/hhero.jpg')]">

       </div>
    <div className="md:w-150 w-80 h-130 md:h-150 bg-[#000000f8] md:flex md:justify-center ">
      <div className=" pl-5 pt-13">
        <h1 className=" text-white text-[30px] md:text-[50px] font-bold md:leading-15 leading-9">
          Welcome to Prime Video
        </h1>
        <h1  className=" text-white text-[17px] md:text-[20px] mt-6 md:mt-12 ">
          Enjoy exclusive Amazon Originals as well as popular movies and TV shows for NGN 2,300/month. Watch now, cancel anytime.
        </h1>
        <NavLink to="/joinprime">
        <button className="md:w-80 w-70 h-12 md:h-15 bg-white rounded-[10px] md:mt-12 mt-6 font-bold md:text-[18px] ">
          Prime Video Member? Sign in
        </button>
           
        </NavLink>

        <div className="text-white flex items-center gap-5 mt-7">
          <span className="md:w-30 w-25"> <hr/> </span>
          or
          <span className="md:w-30 w-25"> <hr/> </span>

        </div>

         <NavLink to="/joinprime">
        <button className="md:w-80 w-70 h-12 md:h-15 bg-white rounded-[10px] md:mt-12 mt-6 font-bold md:text-[18px] ">
          Start your 7-days free trail
        </button>
           
        </NavLink>
        


      </div>
    
    </div>
      

      
    </div>

    </div>
   
    </div>
      
  )
}

export default Hero

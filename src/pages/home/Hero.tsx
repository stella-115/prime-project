
// import React from 'react'

// import { useState } from "react"
import { NavLink } from "react-router-dom"


const Hero = () => {
  
  
  return (

    <div className="w-full md:min-h-screen bg-black md:flex justify-center md:pt-0 pt-5 ">
       <div className=" md:w-[95%] md:mt-15 mt-0 pt-12 md:pt-0">
       <div className=" md:w-full  md:h-150 bg-[url('/imgs/hhero.jpg')] md:bg-center bg-right md:bg-cover ">
        <div className="md:hidden lg:hidden w-full bg-cover  bg-right h-80 bg-[url('imgs/hhero.jpg')] flex">
       </div>
       
    <div className="md:w-150 w-full h-110 md:h-150 bg-[#000000f8] md:flex md:justify-center ">
      <div className=" pl-5 pt-13 md:w-150 w-[90%]">
        <h1 className=" text-white text-[25px] md:text-[50px] font-bold md:leading-15 leading-9 md:flex-none md:justify-normal flex justify-center ">
          Welcome to Prime Video
        </h1>
        <h1  className=" text-white text-[17px] md:text-[20px] mt-6 md:mt-12 md:flex-none flex justify-center">
          Enjoy exclusive Amazon Originals as well as popular movies and TV shows for NGN 2,300/month. Watch now, cancel anytime.
        </h1>
        <div className="md:flex-none md:justify-normal flex justify-center">
           <NavLink to="/joinprime">
        <button className="md:w-80 w-70 h-12 md:h-15 bg-white rounded-[10px] md:mt-12 mt-6 font-bold md:text-[18px] ">
          Prime Video Member? Sign in
        </button>
           
        </NavLink>

        </div>
       

        <div className="text-white flex md:justify-normal justify-center items-center gap-5 mt-7">
          <span className="md:w-30 w-28"> <hr/> </span>
          or
          <span className="md:w-30 w-28"> <hr/> </span>

        </div>
        <div  className="md:flex-none md:justify-normal flex justify-center">
          
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
   
    </div>
      
  )
}

export default Hero

// import React from 'react'
// import bngd from "./../../assets/img/hero/BRND.jpg"

import { NavLink } from "react-router-dom"

const Card1 = () => {
  return (
    <div className="w-full min-h-screen">
      <div className=" md:h-15 h-0 bg-black ">  
    </div>
    <div className=" md:h-150 bg-[url('src/assets/img/hero/brnd.jpg')] bg-center bg-cover md:flex">

     <div className="md:hidden lg:hidden w-full h-80 bg-[url('src/assets/img/hero/brnd.jpg')] bg-left bg-cover"></div>
   
    <div className=" md:w-150 w-80 h-130 md:h-150 bg-[#000000f8] md:flex md:justify-center md:ml-150 ml-0">
      <div className="pl-5 pt-13">
        <h1 className=" text-white md:text-[50px] text-[30px] font-bold leading-15">
          Great Entertainment
          </h1>
        <h1  className=" text-white md:text-[20px] text-[15px]  md:mt-12 mt-5 ">
         Watch Tom Clancy's Jack Ryan, award-winning Amazon Originals such as The Boys and The Marvelous Mrs. Maisel, as well as popular movies and TV shows, with all titles available to download.
        </h1>
        <NavLink to="/joinprime">
        <button className="w-50 h-15 bg-white rounded-[10px] mt-12 font-bold text-[18px] hover">
          Start your free trail
        </button>
           
        </NavLink>
        </div>
    </div>
   
    </div>
    </div>
  )
}

export default Card1
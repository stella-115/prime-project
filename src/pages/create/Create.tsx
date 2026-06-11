// import React from 'react'

import { IoIosArrowForward, IoIosInformationCircle } from "react-icons/io"
import prime from"./../../assets/img/logo2.png"
import { NavLink } from "react-router-dom"

const Create = () => {
  return (
     <div className=" w-full min-h-100 pt-5">
      <div className="flex justify-center">
        <img src={prime} alt="prime logo" className="w-39" />
      </div>
      <div className="flex justify-center mt-5">
         <div className=" md:w-90 w-72 h-130 border border-gray-300 rounded-[10px] md:ml-6 ml-0 text-[20px] font-medium">
        <h1 className=" md:ml-6 ml-3 mt-5 text-[28px] font-medium">
          Create Account
        </h1> 
        <h1 className="md:ml-6 ml-3 text-[15px] mt-3">
          Your name
        </h1>
        <input type="text" placeholder="First and last name" className=" md:w-75 w-57 h-8 md:ml-6 ml-3 mt-1 border border-gray-500 pl-2 rounded-[7px] placeholder:text-[15px] placeholder:text-gray-400 placeholder:font-mono" />
        <h1 className="md:ml-6 ml-3 text-[15px] mt-3">
          Mobile number
        </h1>
        <div>
            <input type="text" placeholder="Nig +123" className=" md:w-20 w-15 h-8 md:ml-6 ml-3 mt-1 border border-gray-500 pl-2 rounded-[7px] placeholder:text-[15px] placeholder:text-gray-400 placeholder:font-mono" />
            <input type="text" placeholder="Mobile number" className=" md:w-50 w-39 h-8 ml-3 md:ml-6 mt-1 border border-gray-500 pl-2 rounded-[7px] placeholder:text-[15px] placeholder:text-gray-400 placeholder:font-mono" />
        </div>
         <h1 className="ml-3 md:ml-6 text-[12px] text-[#0C7DC8] mt-1 flex gap items-center hover:underline hover:text-[#045c97] cursor-pointer">
          use your email instead <span className="text-[10px]"> <IoIosArrowForward /> </span>
        </h1>

        <h1 className="md:ml-6 ml-3 text-[15px] mt-3">
          Password
        </h1>
        <input type="text" placeholder="At least 6 characters" className=" md:w-75 w-57 h-8 md:ml-6 ml-3 mt-1 border border-gray-500 pl-2 rounded-[7px] placeholder:text-[15px] placeholder:text-gray-400 placeholder:font-mono" />

        <h1 className="flex items-center text-[12px] md:ml-6 ml-3 mt-2 gap-1">
            <span className="text-[20px] text-[#2670B6]"><IoIosInformationCircle /></span> Passwords must be at least 6 characters.
        </h1>

        <h1 className="text-[14px] md:ml-6 ml-3 mt-4">
            To verify your number, we will send you a text message with a temporary code. Message and <br/> data rates may apply.
        </h1>
        <NavLink to="/signup">
        <button className="md:w-75 w-57 h-8 md:ml-6 ml-3 mt-4 bg-amber-300 hover:bg-amber-400 text-black rounded-[100px] text-[14px]">
          Continue
        </button>
        </NavLink>
        

        <h1 className=" border text-[#D5D9D9] border-[#D5D9D9] mt-6 md:ml-6 ml-3 md:w-75 w-60 ">
        <hr/>   
        </h1>
        <h1 className="ml-8 text-[14px] mt-12 flex items-center gap-2">
          Already have an account?  <NavLink to="/joinprime">
            <span className="text-[#0C7DC8] hover:underline cursor-pointer"> Sign in </span></NavLink>  <span className="text-[10px] text-[#0C7DC8]"> <IoIosArrowForward /> </span> 

        </h1>
        
       

      </div>
      </div>
   </div>
  )
}

export default Create
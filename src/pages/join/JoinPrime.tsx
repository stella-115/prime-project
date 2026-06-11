// import React from 'react'
import { IoIosArrowDown } from "react-icons/io"
import prime from "./../../assets/img/logo2.png"
import { NavLink } from "react-router-dom"

const JoinPrime = () => {
  return (
    <div className=" w-full min-h-100 pt-5">
      <div className="flex justify-center">
        <img src={prime} alt="prime logo" className="w-39" />
      </div>
      <div className="flex justify-center mt-5">
         <div className=" md:w-90 w-70 h-70 border border-gray-300 rounded-[10px] md:ml-6 ml-0 text-[20px] font-medium">
        <h1 className=" md:ml-8 ml-4 mt-5 text-[20px] font-medium">
          Sign in
        </h1> 
        <h1 className="md:ml-8 ml-4 text-[15px] mt-3">
          Enter mobile number or email
        </h1>
        <input type="text" className="md:w-75 w-55 h-8 md:ml-8 ml-4 mt-2 border border-gray-500 pl-2 rounded-[7px]" />
        <NavLink to="/signup">
           <button className="w-55 md:w-75 h-8 md:ml-8 ml-4 mt-3 bg-amber-300 hover:bg-amber-400 text-black rounded-[100px] text-[14px]">
          Continue
        </button>

        </NavLink>
       
        <h1 className="md:ml-8 ml-4 text-[12px] mt-3">
          By continuing, you agree to the Amazon <span className="text-[#0C7DC8] hover:text-[#045c97] underline cursor-pointer"> Conditions of Use and Privacy Notice.</span>
        </h1>
        <h1 className="md:ml-8 ml-4 text-[14px] text-[#0C7DC8] mt-3 flex gap-2 items-center hover:underline hover:text-[#045c97] cursor-pointer">
          Need Help?  <span className="text-black text-[17px]"> <IoIosArrowDown/></span>
        </h1>

      </div>
      </div>

      <div className="flex items-center justify-center md:gap-2 gap-1 mt-5 text-[13px] text-[#565C6E]">
       <span className="md:w-28 w-18 border-[#7e8496] text-[#7e8496] border"> <hr /> </span> New to Amazon? <span className="md:w-30 w-18 text-[#7e8496] border-[#7e8496] border"> <hr /> </span> 
      </div>

      <NavLink to="/create">
            <div className=" flex justify-center mt-5">
        <button className="w-70 md:w-90 h-8 border border-[#6b7286] hover:bg-[#F7FAFA] rounded-[100px]">
        Create your Amazon account
      </button></div>
      </NavLink>


    </div>    
  )
}

export default JoinPrime
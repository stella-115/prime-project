// import React from 'react'
import { IoWarningOutline } from "react-icons/io5"
import blue from "./../../assets/img/bluerad.png"
import prime from "./../../assets/img/primevideo.png"
import { IoIosArrowDown } from "react-icons/io"
import { NavLink } from "react-router-dom"

const Signup = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center">
        <div className="md:w-[75%] w-[90%] text-white">

           <div className="flex md:gap-50 gap-5 ">
            <div className="mt-20">
                 <img src={prime} alt=""  className="md:w-35 w-15"/>
                 <h1 className="md:mt-5 mt-2 font-bold md:text-[30px] text-[12px]">Get Prime</h1>
            </div>
                        <img src={blue} alt="" className="md:w-150 md:h-50 w-65 h-15  "/>

           </div>
           <div  className=" flex items-center md:gap-5 gap-2 md:w-235 w-85 md:mt-8 mt-4 md:h-20 h-7 md:pl-8 pl-4  bg-[#FFED89] ">
            <div className="text-black md:text-4xl text-xl">
                <IoWarningOutline />

            </div>
            <div className="text-black md:text-[20px] text-[8px]">
                <span className="font-bold">Sign up instructions</span>
                <br/> A valid address in Nigeria is required for this offer.
            </div>
           </div>

           <div className="md:w-235 w-85 md:min-h-100 bg-white mt-8 rounded-[10px]">
            <h1 className="text-black text-[20px] font-bold pt-5 pl-5">
                Add a Payment Method
            </h1>
            <h1 className="text-black px-5 mt-4">
                <hr/>
            </h1>
             <h1 className="text-black text-[20px] font-bold pt-5 pl-5">
               Digital wallets
               <br/> <span className="font-normal">
                Add up to one account per provider. During sign up, you might be redirected to provider's website for verification.
               </span>
                 <h1 className="mt-8 text-[#0578FF]  text-[12px] font-normal">
                Add a digital Wallet 
            </h1>
            </h1>
          <h1 className="text-black text-[20px] font-bold pt-5 pl-5">
               Digital wallets </h1>
               <div className="flex md:gap-5 gap-2.5 ">
                <button className="text-black w-18 flex items-center justify-center h-7 border mt-2 ml-5 rounded-md border-black">
                    Select <IoIosArrowDown/>
                </button>
                 <button  className="text-black w-40 flex items-center justify-center h-7 border-none mt-2 ml-5 rounded-[100px] border-black bg-amber-300 " >
                    Add digital wallet
                </button>
               </div>
               <h1 className="text-black px-5 mt-11">
                <hr/>
            </h1>
             <h1 className="text-black text-[21px] font-bold pt-5 pl-5 pb-12">
               Credit or debit cards
               <br/> <span className="font-normal">
                Amazon accepts major credit and debit cards.
               </span>
                <h1 className="hover:text-[#0C3353] text-[#205da1] font-normal mt-3">
                Add a credit or debit card
               </h1>
               </h1>
           </div>
           <NavLink to="/tvshow">
             <button className="w-28 h-15 border-2 border-gray-500 mt-10 mb-20 bg-black text-gray-400 text-[20px] rounded-[7px]">
            Continue
           </button>

           </NavLink>

          
           
            

        </div>
        
        </div>
  )
}

export default Signup
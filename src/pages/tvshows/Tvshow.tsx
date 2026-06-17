// import React from 'react'

import { GoPlus } from "react-icons/go"
import { MdOutlineInfo } from "react-icons/md"
import { TbCircleArrowUpRight, TbShoppingBag } from "react-icons/tb"
import hero5 from "./../../assets/img/heroo5.png"

const Tvshow = () => {
  return (
     <div className="bg-[url('/imgs/hero5.jpeg')] w-full min-h-100   md:min-h-screen bg-cover md:bg-center bg-right flex justify-center bg-[#00050d92]">
      <div className="w-[96%] ">
           <img src={hero5} alt="" className="md:w-100 w-60 pt-65 " />
           <h1 className="text-[#30D491] text-2xl mt-2 gap-3 flex items-center">
            <TbCircleArrowUpRight/> <span className="text-[15px] font-medium"> #1 in Nigeria</span>
           </h1>

    <div className="flex items-center gap-3">
      <button className="md:w-60 w-50 h-15 rounded-[10px] mt-10 text-white bg-[#454d5893] text-[20px] font-bold hover:bg-white hover:text-black">
        Watch with Prime <br/> <span className="text-[15px]"> Start your 7-days free trial</span>

      </button>
       <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-10 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
           <GoPlus />
        </button>
    

        <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-10 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
          <MdOutlineInfo/>
        </button>
    </div>
    <div className="flex justify-between">
       <h1 className="text-white flex items-center gap-2 mt-3 font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    <h1 className="text-white mt-3">
      Terms apply 
    </h1>
    </div>
    <div className="flex justify-end"> <h1 className="  mt-2 w-9 h-6  rounded-[7px] bg-[#454d5893] text-white ">16+</h1></div>
    </div>
    </div>
  )
}

export default Tvshow

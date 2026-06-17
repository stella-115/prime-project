// import React from 'react'

// import { useState } from "react"
// import { TbGridDots } from "react-icons/tb"

const Genres = () => {
   
  
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">
        <div className="md:w-[96%] w-[90%] py-20">
            <h1 className="text-[35px] font-bold md:flex-none md:justify-normal flex justify-center">
                Categories
            </h1>
            <h1 className="text-[20px] font-bold  md:flex-none md:justify-normal flex justify-center"> Genres </h1>
            <div className=" md:flex gap-7 mt-3 ">
                <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/action.png')] text-[22px] font-bold mt-3 md:mt-0 ">
                    Action and adventure
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/comedy.png')] text-[22px] font-bold mt-3 md:mt-0">
                    Comedy
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/doc.png')] text-[22px] font-bold mt-3 md:mt-0">
                    Documentary
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/dreama.png')] text-[22px] font-bold mt-3 md:mt-0">
                    Drama
                </div>
            </div>

            <div className="md:flex gap-7 md:mt-5 mt:3">
                <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/fantacy.png')] text-[22px] font-bold">
                    Fantasy
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/horrow.png')] text-[22px] font-bold mt-3 md:mt-0">
                    Horror
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/kids.png')] text-[22px] font-bold mt-3 md:mt-0">
                    Kids
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/mystery.png')] text-[22px] font-bold mt-3 md:mt-0">
                    Mystery and thriller
                </div>
            </div>

            <div className=" md:flex gap-7 md:mt-5 mt-3">
                <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/romance.png')] text-[22px] font-bold ">
                    Romance
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('/imgs/science.png')] text-[22px] font-bold mt-3 md:mt-0">
                    Science fiction
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Genres
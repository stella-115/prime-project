// import React from 'react'

// import { useState } from "react"
// import { TbGridDots } from "react-icons/tb"

const Genres = () => {
   
  
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">
        <div className="w-[96%] py-20">
            <h1 className="text-[35px] font-bold">
                Categories
            </h1>
            <h1 className="text-[20px] font-bold"> Genres </h1>
            <div className="flex gap-7 mt-3">
                <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/action.png')] text-[22px] font-bold">
                    Action and adventure
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/comedy.png')] text-[22px] font-bold">
                    Comedy
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/doc.png')] text-[22px] font-bold">
                    Documentary
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/dreama.png')] text-[22px] font-bold">
                    Drama
                </div>
            </div>

            <div className="flex gap-7 mt-5">
                <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/fantacy.png')] text-[22px] font-bold">
                    Fantasy
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/horrow.png')] text-[22px] font-bold">
                    Horror
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/kids.png')] text-[22px] font-bold">
                    Kids
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/mystery.png')] text-[22px] font-bold">
                    Mystery and thriller
                </div>
            </div>

            <div className="flex gap-7 mt-5">
                <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/romance.png')] text-[22px] font-bold">
                    Romance
                </div>

                 <div className="w-70 h-40 rounded-[10px] flex pl-3 items-center bg-[url('src/assets/img/genres/science.png')] text-[22px] font-bold">
                    Science fiction
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Genres
// import React from 'react'

import { IoIosArrowForward } from "react-icons/io"
import { TbCircleArrowUpRight, TbShoppingBag } from "react-icons/tb"
import { NavLink } from "react-router-dom"

const Mcard = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center">
    
          <div className="w-[96%] ">
            <div className="flex items-center gap-5">
                 <h1 className="text-white font-bold md:text-[21px] text-[15px]">
              Featured Originals and Exclusives 
            </h1>
            <h1 className="text-white font-bold md:text-[21px] text-[15px] flex items-center gap-2">  See more <span> <IoIosArrowForward/> </span></h1>
            </div >
    
            <div className="flex md:gap-5 gap-1">
                  <div className="md:w-80 mt-5 w-70 h-25 md:h-40 bg-center bg-cover bg-[url('/imgs/academy.jpg')] rounded-[10px]">
                  <div className="flex justify-end">
                    <h1 className="text-black font-bold md:text-[12px] text-[10px] md:w-19  z-20 bg-white rounded-tr-[10px]">
                   NEW SERIES
              </h1>
                  </div>
              
              <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
                <TbShoppingBag/>
              </h1>
     
            </div>
    
            <div className="md:w-80 mt-5 w-70 h-25 md:h-40 bg-center bg-cover pl-3 bg-[url('/imgs/agent.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                    <h1 className="text-black font-bold md:text-[12px] text-[10px] w-22 z-20 bg-white rounded-tr-[10px]">
                   NEW MOVIES
              </h1>
                  </div>
              <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
                <TbShoppingBag/>
              </h1>
            </div>
    
            <div className=" hidden md:block w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/anki.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                  </div>
                   
              <h1 className="text-amber-300 z-20 text-xl mt-29">
                <TbShoppingBag/>
              </h1>
    
            </div>
            <div className="hidden md:flex w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/army.jpg')] rounded-[10px]">
             
              <h1 className="text-amber-300 z-20 text-xl mt-34">
                <TbShoppingBag/>
              </h1>
    
            </div>
    
            </div>
            
             <div className="flex items-center gap-3">
                 <h1 className="text-white font-bold md:text-[21px] text-[15px]  mt-5">
              Top 10 in Nigeria 
            </h1>
            <h1 className="text-white mt-5 font-bold text-[25px] flex items-center gap-2"> <TbCircleArrowUpRight/></h1>
            </div >
    
            <div className="flex md:gap-5 gap-1">
                  <div className="md:w-80 w-70 mt-5 md:h-40 h-25 bg-center bg-cover bg-[url('/imgs/arrow.jpg')] rounded-[10px]">
                  <div className="flex justify-end">
                    <h1 className="text-black font-bold md:text-[12px] text-[10px] w-19 z-20 bg-white rounded-tr-[10px]">
                   NEW SERIES
              </h1>
                  </div>
              
              <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
                <TbShoppingBag/>
              </h1>
     
            </div>
    
            <div className="  md:w-80 w-70 h-25 mt-5 md:h-40 bg-center bg-cover pl-3 bg-[url('/imgs/campus.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                    <h1 className="text-black font-bold md:text-[12px] text-[10px] w-22 z-20 bg-white rounded-tr-[10px]">
                   NEW MOVIES
              </h1>
                  </div>
              <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
                <TbShoppingBag/>
              </h1>
            </div>
    
            <div className=" hidden md:block w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/chrismas.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                    <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
                   NEW SERIES 
              </h1>
                  </div>
              <h1 className="text-amber-300 z-20 text-xl mt-29">
                <TbShoppingBag/>
              </h1>
    
            </div>
            <div className=" hidden md:flex w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/citadel.jpg')] rounded-[10px]">
             
              <h1 className="text-amber-300 z-20 text-xl mt-34">
                <TbShoppingBag/>
              </h1>
    
            </div>
    
            </div>
    
             <div className="flex items-center mt-5 gap-5">
                 <h1 className="text-white font-bold md:text-[21px] text-[15px]">
              Binge-worthy box sets
            </h1>
            <h1 className="text-white font-bold md:text-[21px] text-[15px] flex items-center gap-2">  See more <span> <IoIosArrowForward/> </span></h1>
            </div >
    
            <div className="flex md:gap-5 gap-1">
                  <div className="md:w-80 mt-5 md:h-40 w-70 h-25 bg-center bg-cover bg-[url('/imgs/dirty.jpg')] rounded-[10px]">
                  <div className="flex justify-end">
                    <h1 className="text-black font-bold md:text-[12px]  text-[10px] w-19 z-20 bg-white rounded-tr-[10px]">
                   NEW SERIES
              </h1>
                  </div>
              
              <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
                <TbShoppingBag/>
              </h1>
     
            </div>
    
            <div className="md:w-80 mt-5 md:h-40 w-70 h-25 bg-center bg-cover pl-3 bg-[url('/imgs/dororo.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                    <h1 className="text-black font-bold md:text-[12px] text-[10px] w-22 z-20 bg-white rounded-tr-[10px]">
                   NEW MOVIES
              </h1>
                  </div>
              <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
                <TbShoppingBag/>
              </h1>
            </div>
    
            <div className=" hidden md:block w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/heist.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                    <h1 className="text-black font-bold text-[12px] w-12 z-20 bg-white rounded-tr-[10px]">
                   NEW 
              </h1>
                  </div>
              <h1 className="text-amber-300 z-20 text-xl mt-29">
                <TbShoppingBag/>
              </h1>
    
            </div>
            <div className="hidden md:block w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/fools.jpg')] rounded-[10px]">
             
              <h1 className="text-amber-300 z-20 text-xl mt-34">
                <TbShoppingBag/>
              </h1>
    
            </div>
    
            </div>

             <div className="flex items-center gap-3">
             <h1 className="text-white font-bold md:text-[21px] text-[15px]  mt-5">
          Top 10 in Nigeria 
        </h1>
        <h1 className="text-white mt-5 font-bold text-[25px] flex items-center gap-2"> <TbCircleArrowUpRight/></h1>
        </div >

        <div className="flex md:gap-5 gap-1">
              <div className="md:w-80 mt-5 md:h-40 w-70 h-25 bg-center bg-cover bg-[url('/imgs/every.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                <h1 className="text-black font-bold md:text-[12px] text-[10px] w-19 z-20 bg-white rounded-tr-[10px]">
               NEW SERIES
          </h1>
              </div>
          
          <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
            <TbShoppingBag/>
          </h1>
 
        </div>

        <div className="md:w-80 mt-5 md:h-40 w-70 h-25 bg-center bg-cover pl-3 bg-[url('/imgs/familygbese.png')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold md:text-[12px] text-[10px] w-22 z-20 bg-white rounded-tr-[10px]">
               NEW MOVIES
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
            <TbShoppingBag/>
          </h1>
        </div>

        <div className="hidden md:block w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/jackryan.jpg')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
               NEW SERIES 
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>

        </div>
        <div className="hidden md:block w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/prettylethal2.png')] rounded-[10px]">
         
          <h1 className="text-amber-300 z-20 text-xl mt-34">
            <TbShoppingBag/>
          </h1>

        </div>

        </div>
            <div className="flex items-center gap-3">
                     <h1 className="text-white font-bold md:text-[21px] text-[15px]  mt-5">
                  Top 10 in Nigeria 
                </h1>
                <h1 className="text-white mt-5 font-bold text-[25px] flex items-center gap-2"> <TbCircleArrowUpRight/></h1>
                </div >
        
                <div className="flex md:gap-5 gap-1">
                      <div className="md:w-80 mt-5 md:h-40 w-70 h-25 bg-center bg-cover bg-[url('/imgs/missing.jpg')] rounded-[10px]">
                      <div className="flex justify-end">
                        <h1 className="text-black font-bold text-[10px] md:text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
                       NEW SERIES
                  </h1>
                      </div>
                  
                  <h1 className="text-amber-300 z-20 text-xl mt-14 md:mt-29">
                    <TbShoppingBag/>
                  </h1>
         
                </div>
        
                <div className="md:w-80 mt-5 md:h-40 w-70 h-25 bg-center bg-cover pl-3 bg-[url('/imgs/spider.png')] rounded-[10px]">
                  <div className="flex justify-end">
                        <h1 className="text-black font-bold md:text-[12px] text-[10px] w-22 z-20 bg-white rounded-tr-[10px]">
                       NEW MOVIES
                  </h1>
                      </div>
                  <h1 className="text-amber-300 z-20 text-xl md:mt-29 mt-14">
                    <TbShoppingBag/>
                  </h1>
                </div>
        
                <div className=" hidden md:block w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/she.jpg')] rounded-[10px]">
                  <div className="flex justify-end">
                        <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
                       NEW SERIES 
                  </h1>
                      </div>
                  <h1 className="text-amber-300 z-20 text-xl mt-29">
                    <TbShoppingBag/>
                  </h1>
        
                </div>
                <div className="md:block hidden w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('/imgs/soz.jpg')] rounded-[10px]">
                 
                  <h1 className="text-amber-300 z-20 text-xl mt-34">
                    <TbShoppingBag/>
                  </h1>
        
                </div>
        
                </div>
                 <div className="flex justify-center mt-10 mb-5">
                    <NavLink to="/tvshow">
                        <button className="w-30 h-15 bg-[#454d5893] text-white font-bold rounded-[7px] hover:bg-white hover:text-black text-[18px] ">
            See more
        </button>

                    </NavLink>
             
        </div>
            
    
          </div>
          </div>
  )
}

export default Mcard
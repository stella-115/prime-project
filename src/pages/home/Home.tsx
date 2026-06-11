// import React from 'react'
import hero from "./../../assets/img/heroh.png"
import { MdOutlineInfo } from "react-icons/md"
import { GoPlus } from "react-icons/go"
// import { TbCircleArrowUpRight, TbShoppingBag } from "react-icons/tb"

import { IoIosArrowForward } from "react-icons/io"
import { TbCircleArrowUpRight, TbShoppingBag } from "react-icons/tb"
import { NavLink } from "react-router-dom"


const Home = () => {
  return (
    <div className="bg-[url('src/assets/img/hero.jpeg')] w-full min-h-screen bg-cover bg-center flex justify-center">
      <div className="w-[96%] pt-52">
           <img src={hero} alt="" className="w-100 " />
           <h1 className="text-[#30D491] text-2xl mt-2 gap-3 flex items-center">
            <TbCircleArrowUpRight/> <span className="text-[15px] font-medium"> #1 in Nigeria</span>
           </h1>

    <div className="flex items-center gap-3">
      <button className="w-60 h-15 rounded-[10px] mt-10 text-white bg-[#454d5893] text-[20px] font-bold hover:bg-white hover:text-black">
        Watch with Prime <br/> <span className="text-[15px]"> Start your 7-days free trial</span>

      </button>
       <button className="text-white w-15 h-15 rounded-[100px] mt-10 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
           <GoPlus />
        </button>
    

        <button className="text-white w-15 h-15 rounded-[100px] mt-10 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
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
      Terms apply <br/>
    </h1>
     </div>
     <div className="flex justify-end"> <h1 className="  mt-2 w-9 h-6  rounded-[7px] bg-[#454d5893] text-white ">16+</h1></div>
   
      </div>

      



      <div className="w-full min-h-screen bg-black flex justify-center">

      <div className="w-[96%] ">
        <div className="flex items-center gap-5">
             <h1 className="text-white font-bold text-[21px]">
          Featured Originals and Exclusives 
        </h1>
        <h1 className="text-white font-bold text-[21px] flex items-center gap-2">  See more <span> <IoIosArrowForward/> </span></h1>
        </div >

        <div className="flex gap-5">
              <div className="w-80 mt-5 h-40 bg-center bg-cover bg-[url('src/assets/img/anaconda.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
               NEW SERIES
          </h1>
              </div>
          
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>
 
        </div>

        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/56days.jpg')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-22 z-20 bg-white rounded-tr-[10px]">
               NEW MOVIES
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>
        </div>

        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/crime101.jpg')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-12 z-20 bg-white rounded-tr-[10px]">
               NEW 
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>

        </div>
        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/2brokegirls.jpg')] rounded-[10px]">
         
          <h1 className="text-amber-300 z-20 text-xl mt-34">
            <TbShoppingBag/>
          </h1>

        </div>

        </div>
        
         <div className="flex items-center gap-3">
             <h1 className="text-white font-bold text-[21px]  mt-5">
          Top 10 in Nigeria 
        </h1>
        <h1 className="text-white mt-5 font-bold text-[25px] flex items-center gap-2"> <TbCircleArrowUpRight/></h1>
        </div >

        <div className="flex gap-5">
              <div className="w-80 mt-5 h-40 bg-center bg-cover bg-[url('src/assets/img/every.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
               NEW SERIES
          </h1>
              </div>
          
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>
 
        </div>

        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/familygbese.png')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-22 z-20 bg-white rounded-tr-[10px]">
               NEW MOVIES
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>
        </div>

        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/jackryan.jpg')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
               NEW SERIES 
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>

        </div>
        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/prettylethal2.png')] rounded-[10px]">
         
          <h1 className="text-amber-300 z-20 text-xl mt-34">
            <TbShoppingBag/>
          </h1>

        </div>

        </div>

         <div className="flex items-center mt-5 gap-5">
             <h1 className="text-white font-bold text-[21px]">
          Binge-worthy box sets
        </h1>
        <h1 className="text-white font-bold text-[21px] flex items-center gap-2">  See more <span> <IoIosArrowForward/> </span></h1>
        </div >

        <div className="flex gap-5">
              <div className="w-80 mt-5 h-40 bg-center bg-cover bg-[url('src/assets/img/theboys.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
               NEW SERIES
          </h1>
              </div>
          
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>
 
        </div>

        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/theoriginals.jpg')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-22 z-20 bg-white rounded-tr-[10px]">
               NEW MOVIES
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>
        </div>

        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/thering.jpg')] rounded-[10px]">
          <div className="flex justify-end">
                <h1 className="text-black font-bold text-[12px] w-12 z-20 bg-white rounded-tr-[10px]">
               NEW 
          </h1>
              </div>
          <h1 className="text-amber-300 z-20 text-xl mt-29">
            <TbShoppingBag/>
          </h1>

        </div>
        <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/thepickup.jpg')] rounded-[10px]">
         
          <h1 className="text-amber-300 z-20 text-xl mt-34">
            <TbShoppingBag/>
          </h1>

        </div>

        </div>
        <div className="flex items-center gap-5">
                     <h1 className="text-white font-bold text-[21px]">
                  Featured Originals and Exclusives 
                </h1>
                <h1 className="text-white font-bold text-[21px] flex items-center gap-2">  See more <span> <IoIosArrowForward/> </span></h1>
                </div >
        
                <div className="flex gap-5">
                      <div className="w-80 mt-5 h-40 bg-center bg-cover bg-[url('src/assets/img/tv/housemaid.jpg')] rounded-[10px]">
                      <div className="flex justify-end">
                        <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
                       NEW SERIES
                  </h1>
                      </div>
                  
                  <h1 className="text-amber-300 z-20 text-xl mt-29">
                    <TbShoppingBag/>
                  </h1>
         
                </div>
        
                <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/tv/jack.jpg')] rounded-[10px]">
                  <div className="flex justify-end">
                        <h1 className="text-black font-bold text-[12px] w-22 z-20 bg-white rounded-tr-[10px]">
                       NEW MOVIES
                  </h1>
                      </div>
                  <h1 className="text-amber-300 z-20 text-xl mt-29">
                    <TbShoppingBag/>
                  </h1>
                </div>
        
                <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/tv/maxton.jpg')] rounded-[10px]">
                  <div className="flex justify-end">
                        <h1 className="text-black font-bold text-[12px] w-12 z-20 bg-white rounded-tr-[10px]">
                       NEW 
                  </h1>
                      </div>
                  <h1 className="text-amber-300 z-20 text-xl mt-29">
                    <TbShoppingBag/>
                  </h1>
        
                </div>
                <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/tv/mentalist.jpg')] rounded-[10px]">
                 
                  <h1 className="text-amber-300 z-20 text-xl mt-34">
                    <TbShoppingBag/>
                  </h1>
        
                </div>
        
                </div>
                
                <div className="flex items-center gap-3">
                 <h1 className="text-white font-bold text-[21px]  mt-5">
              Top 10 in Nigeria 
            </h1>
            <h1 className="text-white mt-5 font-bold text-[25px] flex items-center gap-2"> <TbCircleArrowUpRight/></h1>
            </div >
    
            <div className="flex gap-5">
                  <div className="w-80 mt-5 h-40 bg-center bg-cover bg-[url('src/assets/img/tv/arrow.jpg')] rounded-[10px]">
                  <div className="flex justify-end">
                    <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
                   NEW SERIES
              </h1>
                  </div>
              
              <h1 className="text-amber-300 z-20 text-xl mt-29">
                <TbShoppingBag/>
              </h1>
     
            </div>
    
            <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/tv/campus.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                    <h1 className="text-black font-bold text-[12px] w-22 z-20 bg-white rounded-tr-[10px]">
                   NEW MOVIES
              </h1>
                  </div>
              <h1 className="text-amber-300 z-20 text-xl mt-29">
                <TbShoppingBag/>
              </h1>
            </div>
    
            <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/tv/chrismas.jpg')] rounded-[10px]">
              <div className="flex justify-end">
                    <h1 className="text-black font-bold text-[12px] w-19 z-20 bg-white rounded-tr-[10px]">
                   NEW SERIES 
              </h1>
                  </div>
              <h1 className="text-amber-300 z-20 text-xl mt-29">
                <TbShoppingBag/>
              </h1>
    
            </div>
            <div className="w-80 mt-5 h-40 bg-center bg-cover pl-3 bg-[url('src/assets/img/tv/citadel.jpg')] rounded-[10px]">
             
              <h1 className="text-amber-300 z-20 text-xl mt-34">
                <TbShoppingBag/>
              </h1>
    
            </div>
    
            </div>
               <div className="flex justify-center mt-10 mb-40">
                <NavLink to="/movies">
                           <button className="w-30 h-15 bg-[#454d5893] text-white font-bold rounded-[7px] hover:bg-white hover:text-black text-[18px] ">
            See more
        </button>
                </NavLink>
            
        </div>

      </div>
      </div>

   
    </div>
  )
}

export default Home
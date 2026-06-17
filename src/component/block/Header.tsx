
// import React from 'react'


import { IoIosArrowDown, IoIosArrowUp, IoMdContact} from "react-icons/io"
import { IoSearch, IoSearchOutline } from "react-icons/io5"
import { TbGridDots } from "react-icons/tb"
import logo from "./../../assets/img/prime logo.png"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Header = () => {

  const [show, setShow] = useState <boolean | null> (null)
  const dropdown = () => {
    setShow(!show)
  }
  const [show1, setShow1] = useState <boolean | null> (null)
  const dropdown1 = () => {
    setShow1(!show1)
  }
  const [show2, setShow2] = useState <boolean | null> (null)
  const dropdown2 = () => {
    setShow2(!show2)
  }
   const [show3, setShow3] = useState <boolean | null> (null)
  const dropdown3 = () => {
    setShow3(!show3)
  }
  const [show4, setShow4] = useState <boolean | null> (null)
  const dropdown4 = () => {
    setShow4(!show4)
  }
  

  return (
    <div className="w-full md:h-20 bg-transparent fixed flex justify-center  text-white z-40">
      <div className="md:w-[96%] w-[97%] md:h-15 bg-[#30374071] px-5 flex  justify-between items-center  rounded-b-[10px]">
        <div className="md:flex items-center md:gap-6   "> 
         <img src={logo} alt="primelogo" className="w-20 pt-5 md:pt-0 "/> 
         
        <div className="md:flex gap-6 items-center hidden">
           <NavLink to="/">
              <button className="font-bold text-[15px] w-20 h-10 rounded-[10px] bg-[#b6bebe65] hover:w-20 hover:h-10 hover:rounded-[10px] hover:bg-white hover:text-black">  Home </button>
        </NavLink>

        <NavLink to="/movies">
                 <button className="font-bold text-[15px] hover:w-20 hover:h-10 hover:rounded-[10px] hover:bg-white hover:text-black ">  Movies </button>
        </NavLink>

         <NavLink to="/tvshow">
                 <button className="font-bold text-[15px] hover:w-20 hover:h-10 hover:rounded-[10px] hover:bg-white hover:text-black"> TV shows</button>
        </NavLink>

        </div>
       
        </div>

        <div className="Md:flex lg:flex items-center gap-6 hidden">

          <div>
            {
              show4 ?
              (
                <div className="hover:bg-white hover:text-black hover:w-8 hover:h-8 hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[19px]"onClick={dropdown4}> <IoSearchOutline/>

                </div>
              )
              :
              (
                <div className="hover:bg-white hover:text-black hover:w-8 hover:h-8 hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[19px]"onClick={dropdown4}> <IoSearchOutline/>

                </div>
              )
            }
            {
              show4?
              (
                <div className="w-215 h-30 rounded-[13px] bg-[#1C2027] top-20 absolute right-50 flex justify-center items-center">
                  <div className="flex items-center w-180  gap-4 h-15 pl-8 rounded-[7px] bg-[#33373D]">
                    <h1  className="text-[25px] text-[#AAAAAA]">
                   <IoSearch />
                  </h1>
                  <input type="text"  placeholder="Search " className=" text-[20px] font-bold  text-[#AAAAAA] w-150 h-8 bg-[#33373D] border-none outline-none"  />


                  </div>
                  
                </div>
              )
              :
              null
            }
          </div>
          {/* <div>
              <button className="hover:bg-white hover:text-black hover:w-8 hover:h-8 hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[19px]">  <IoSearchOutline/> </button>

          </div> */}
        <div className="">
            {  
            show3 ?
            (
              <div className="flex items-center justify-center gap-2 hover:w-20 hover:h-10 hover:rounded-[10px] hover:bg-white hover:text-black" onClick={dropdown3}>
                EN <span className="text-[19px]"><IoIosArrowUp /> </span>

              </div>
            )
            :
            (
              <div className="flex items-center justify-center gap-2 hover:w-20 hover:h-10 hover:rounded-[10px] hover:bg-white hover:text-black" onClick={dropdown3}>
                 EN <span className="text-[19px]">  <IoIosArrowDown/> </span>

              </div>
            )
          }
          {
            show3 ?
            (
              <div className="w-200 absolute h-110 bg-[#1f272f] right-12 top-20 p-8 rounded-2xl ">
                 
                <div className=" flex gap-20">
                  <div className=" flex flex-col gap-6">
                     <h1>
                Indonesian
              </h1>
              <h1> Malay </h1>
               <h1> Danish </h1>
              <h1> German </h1>
              <h1> English</h1>
              <h1>Spanish</h1>
              <h1>  Spanish Latin </h1>
              <h1>French </h1>
              </div>
              <div className=" flex flex-col gap-6">
              <h1> italian </h1>
              <h1> Hungarian </h1>
               <h1>  Dutch  </h1>
              <h1> Norwegian </h1>
              <h1> Polish </h1>
              <h1>  Portuguese (Brazil) </h1>
              <h1>Portuguese (Portugal) </h1>
              <h1>  Romanian </h1>
              </div>
              <div className=" flex flex-col gap-6">
              <h1> Finland   </h1>
              <h1> Swedish  </h1>
               <h1> Turkish </h1>
              <h1> Filipino Language </h1>
              <h1>Czech </h1>
              <h1> Greek </h1>
              <h1>  Russian </h1>
              <h1>  Hebrew </h1>
              </div>
              <div className=" flex flex-col gap-6">
              <h1> Arabic </h1>
              <h1>  Hindi </h1>
               <h1> Tamil  </h1>
              <h1> Telugu  </h1>
              <h1> Thailand </h1>
              <h1> 你好 </h1>
              <h1> 语言资源 </h1>
              <h1> 外语学习 </h1>
                  </div>
                     
             
                  </div>

                </div>

            )
            :
            null
          }


        </div>
        
          {/* <div>
             <button className="flex items-center justify-center gap-2 hover:w-20 hover:h-10 hover:rounded-[10px] hover:bg-white hover:text-black"> EN <span className="text-[19px]"> <IoIosArrowDown/> </span></button>

          </div> */}
           <div className="">
            {
          show1 ?
          (
           <NavLink to="/genres">
               <div className="hover:bg-white hover:text-black hover:w-9 hover:h-9 hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[19px] text-white" onClick={dropdown1}>
             <TbGridDots/> 

           </div>

            </NavLink>
           
          
          )
          :
         (
            <div className="hover:bg-white hover:text-black hover:w-9 hover:h-9 hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[19px] text-white" onClick={dropdown1}>
             <TbGridDots/> 
             </div>
          )
          
        }
         {
              show1 ?
              (
                <div className="w-100 absolute h-120 bg-[#1f272f] right-12 top-20 p-8 rounded-2xl flex flex-col gap-8">
                  <h1 className="text-gray-400 text-[18px] ">
                GENRES
              </h1>
                <div className=" flex justify-between">
                  <div className=" flex flex-col leading-10">
                    <div className="hover:w-50 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1>Action and adventure</h1>
                    </div>
                    <div className="hover:w-40 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1>Comedy</h1>
                    </div>
                    <div className="hover:w-40 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1>Documentary</h1>
                    </div>
                    <div className="hover:w-40 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1>Drama</h1>
                    </div>
                     <div className="hover:w-40 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1> Fantasy</h1>
                    </div>
                     <div className="hover:w-40 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1>  Horror</h1>
                    </div>
                     <div className="hover:w-40 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1> Kids</h1>
                    </div>
                     <div className="hover:w-40 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1> Mystery and thrillers</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col leading-10">
                    <div className="hover:w-25 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1> Romance</h1>
                    </div>
                    <div className="hover:w-28 hover:h-10 hover:rounded-[7px] hover:bg-white hover:text-black hover:flex hover:items-center hover:pl-2 hover:cursor-pointer ">
                      <h1> Science fiction</h1>
                    </div>
                  </div>
                  </div>
                </div>
              )
              :
              null
            }
            </div>

            <div className="">
              {
                show2 ?
                (
                  <div className="hover:bg-white hover:text-[#456782] hover:w-10 hover:h-10  hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[35px] text-[#456782] " onClick={dropdown2}>
                     <IoMdContact/>
                  </div>
                )
                :
                (
                  <div className="hover:bg-white hover:text-[#456782] hover:w-10 hover:h-10  hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[35px] text-[#456782] " onClick={dropdown2}>
                     <IoMdContact/>
                  </div>
                )
              }
              {
                show2 ?
                (
                  <div className="w-50 absolute h-60 bg-[#1f272f] right-6 top-17 p-8 rounded-2xl flex flex-col gap-8">
                      <h1 className="text-gray-400 text-[15px] ">
                YOUR ACCOUNT
              </h1>
                  <div className=" flex flex-col gap-6">
                    <NavLink to="/joinprime">
                              <button className="hover:w-20 hover:h-10 hover:bg-white hover:text-black rounded-[7px]"> Sign In  </button>
                    </NavLink>
                     <NavLink to="/help">
                               <button className="hover:w-20 hover:h-10 hover:bg-white hover:text-black rounded-[7px]"> Help  </button>
                    </NavLink>
                    <NavLink to="/watch">
                    <button className="hover:w-40 hover:h-10 hover:bg-white hover:text-black rounded-[7px]">  Watch Anywhere  </button>

                    </NavLink>
                   
              
              
              </div>

                  </div>
                )
                :
                null
              }

            </div>
   
            {/* <div>
                <button className="hover:bg-white hover:text-[#456782] hover:w-10 hover:h-10  hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[35px] text-[#456782] ">
            <IoMdContact/>
          </button>
            </div> */}

            <div>
               <NavLink to="/joinprime">
                  <button className=" h-10 w-25 rounded-[7px] bg-[#197FD3] hover:bg-[#1A98FF] hover:shadow-2xl hover:shadow-[#1A98FF]">
            Join Prime
          </button>
          </NavLink>
            </div>

            {/* <NavLink to="/genres">

             <button className="hover:bg-white hover:text-black hover:w-9 hover:h-9 hover:items-center hover:flex hover:justify-center hover:rounded-[100px] hover:animate-none text-[19px] text-white" onClick={dropdown}>
            <TbGridDots/> 
          </button>
          </NavLink> */}
        </div>
        <div className="md:hidden">
            {
          show ?
          (
            <div className=" flex items-center justify-center font-bold pr-4" onClick={dropdown}>
            Menu <IoIosArrowDown/>

          </div>
          )
          :
          (
            <div className="flex items-center justify-center font-bold pr-4" onClick={dropdown}>
            Menu <IoIosArrowUp />

          </div>
          )
          
        }

        {
          show ?
          (
            <div className="w-35 absolute rounded-2xl h-65 right-10 top-10 bg-black flex p-6 gap-4 flex-col">
              <h1 className="text-gray-400 text-[18px] ">
                Browse
              </h1>
              <NavLink to="/">
              <button className=" text-white text-[18px] font-medium">
                Home
              </button>

              </NavLink>

               <NavLink to="/movies">
              <button className=" text-white text-[18px] font-medium">
                Movies
              </button>

              </NavLink>

               <NavLink to="/tvshow">
              <button className=" text-white text-[18px] font-medium">
                TvShow
              </button>

              </NavLink>

               <NavLink to="/joinprime">
                  <button className=" h-10 w-25 rounded-[7px] bg-[#197FD3] hover:bg-[#1A98FF] hover:shadow-2xl hover:shadow-[#1A98FF]">
            Join Prime
          </button>
          </NavLink>

            </div>

          )
          :
          null
        }

        </div>
      

  
      </div>
       
    </div>
  )
}

export default Header

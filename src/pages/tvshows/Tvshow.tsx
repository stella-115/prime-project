// import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import t01 from "../../assets/t01.png"
import t02 from "../../assets/t02.png"
import t03 from "../../assets/t03.png"
// import h04 from "../../assets/h04.png"
import t04 from "../../assets/t04.png"
import t05 from "../../assets/t05.png"

import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { TbCircleArrowUpRight, TbShoppingBag } from 'react-icons/tb';
import { MdOutlineInfo } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';

const Tvshow = () => {
  return (
    <div>
      <div className=' hidden md:flex bg-black'>
             <Swiper
      spaceBetween={50}
       modules={[ Pagination, Autoplay]}
       pagination={{clickable:true}}
       autoplay={{delay: 2000}}
       loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      <SwiperSlide>
        
           
           <div className="bg-[url('/imgs/t11.jpeg')] w-full min-h-screen bg-cover bg-center flex justify-center bg-[#00050d92]">
      
      <div className="w-[96%] ">
           <img src={t01} alt="" className="md:w-100 w-60 pt-70 " />
           <h1 className="text-[#30D491] text-2xl mt- gap-3 flex items-center">
            <TbCircleArrowUpRight/> <span className="text-[15px] font-medium"> #1 in Nigeria</span>
           </h1>

    <div className="flex items-center gap-3">
      <button className="md:w-60 w-50 h-15 rounded-[10px] mt-5 text-white bg-[#454d5893] text-[20px] font-bold hover:bg-white hover:text-black">
        Watch with Prime <br/> <span className="text-[15px]"> Start your 7-days free trial</span>

      </button>
       <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-5 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
           <GoPlus />
        </button>
    

        <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-5 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
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
       
      </SwiperSlide>

      <SwiperSlide> 
         <div className="bg-[url('/imgs/t12.jpeg')] md:w-full md:min-h-screen min-h-100 w-full bg-cover md:bg-center bg-right flex justify-center bg-[#00050d92]">
      <div className="w-[96%] ">
           <img src={t02} alt="" className="md:w-50 w-60 pt-45 " />
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
       <h1 className="text-black flex items-center gap-2 mt-3 font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    <h1 className="text-black mt-3">
      Terms apply 
    </h1>
    </div>
    <div className="flex justify-end"> <h1 className="  mt-2 w-9 h-6  rounded-[7px] bg-[#454d5893] text-white ">16+</h1></div>
    </div>
    </div>
        </SwiperSlide>

    
         <SwiperSlide>
           <div className="bg-[url('/imgs/t13.jpeg')] md:w-full md:min-h-screen min-h-100 w-full bg-cover md:bg-center bg-right flex justify-center bg-[#00050d92]">
      <div className="w-[96%] ">
           <img src={t03} alt="" className="md:w-55 w-60 pt-55 " />
           <h1 className="text-[#30D491] text-2xl mt-2 gap-3 flex items-center">
            <TbCircleArrowUpRight/> <span className="text-[15px] font-medium"> #1 in Nigeria</span>
           </h1>

    <div className="flex items-center gap-3">
      <button className="md:w-60 w-50 h-15 rounded-[10px] mt-5 mb-5 text-white bg-[#454d5893] text-[20px] font-bold hover:bg-white hover:text-black">
        Watch with Prime <br/> <span className="text-[15px]"> Start your 7-days free trial</span>

      </button>
       <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-5 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
           <GoPlus />
        </button>
    

        <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-5 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
          <MdOutlineInfo/>
        </button>
    </div>
    <div className="flex justify-between">
       <h1 className="text-white flex items-center gap-2 mt- font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    <h1 className="text-white mt-">
      Terms apply 
    </h1>
    </div>
    <div className="flex justify-end"> <h1 className="  mt- w-9 h-6  rounded-[7px] bg-[#454d5893] text-white ">16+</h1></div>
    </div>
    </div>

        </SwiperSlide>
         <SwiperSlide>
           <div className="bg-[url('/imgs/t14.jpeg')] md:w-full md:min-h-screen  bg-cover md:bg-center bg-right flex justify-center bg-[#00050d92]">
      <div className="w-[96%] ">
           <img src={t04} alt="" className="md:w-100 w-60 pt-60 " />
           <h1 className="text-[#30D491] text-2xl mt- gap-3 flex items-center">
            <TbCircleArrowUpRight/> <span className="text-[15px] font-medium"> #1 in Nigeria</span>
           </h1>

    <div className="flex items-center gap-3">
      <button className="md:w-60 w-50 h-15 rounded-[10px] mt-5 text-white bg-[#454d5893] text-[20px] font-bold hover:bg-white hover:text-black">
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
       <h1 className="text-white flex items-center gap-2 mt- font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    <h1 className="text-white mt-">
      Terms apply 
    </h1>
    </div>
    <div className="flex justify-end"> <h1 className="  mt- w-9 h-6  rounded-[7px] bg-[#454d5893] text-white ">16+</h1></div>
    </div>
    </div>

        </SwiperSlide>

          <SwiperSlide>
          <div className="bg-[url('/imgs/t15.jpeg')] md:w-full md:min-h-screen min-h-100 w-full bg-cover md:bg-center bg-right flex justify-center bg-[#00050d92]">
      <div className="w-[96%] ">
           <img src={t05} alt="" className="md:w-50 w-60 pt-55 " />
           <h1 className="text-[#30D491] text-2xl mt- gap-3 flex items-center">
            <TbCircleArrowUpRight/> <span className="text-[15px] font-medium"> #1 in Nigeria</span>
           </h1>

    <div className="flex items-center gap-3">
      <button className="md:w-60 w-50 h-15 rounded-[10px] mt-5 text-white bg-[#454d5893] text-[20px] font-bold hover:bg-white hover:text-black">
        Watch with Prime <br/> <span className="text-[15px]"> Start your 7-days free trial</span>

      </button>
       <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-5 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
           <GoPlus />
        </button>
    

        <button className="text-white md:w-15 md:h-15 w-12 h-12 rounded-[100px] mt-10 bg-[#454d5893] text-[40px] font-light flex items-center justify-center hover:bg-white hover:text-black">
          <MdOutlineInfo/>
        </button>
    </div>
    <div className="flex justify-between">
       <h1 className="text-white flex items-center gap-2 mt- font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    <h1 className="text-white mt-3">
      Terms apply 
    </h1>
    </div>
    <div className="flex justify-end"> <h1 className="  mt- w-9 h-6  rounded-[7px] bg-[#454d5893] text-white ">16+</h1></div>
    </div>
    </div>
        </SwiperSlide>

    </Swiper>
        </div>

        <div className=' md:hidden lg:hidden bg:black'>
             <Swiper
      spaceBetween={50}
       modules={[ Pagination, Autoplay]}
       pagination={{clickable:true}}
       autoplay={{delay: 2000}}
       loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      <SwiperSlide>
        
           <div className="bg-[url('/imgs/t11.jpeg')] w-full h-43  bg-cover bg-center flex justify-center">
      
      <div className="w-[96%] ">
           <img src={t01} alt="" className="w-30 pt-22 " />
             <div className="flex justify-between">
       <h1 className="text-white flex items-center gap-2 mt-3 font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    </div>
    </div>
    </div>
       
      </SwiperSlide>

        <SwiperSlide>
        
           
           <div className="bg-[url('/imgs/t12.jpeg')] w-full h-43  bg-cover bg-center flex justify-center bg-[#00050d92]">
      
      <div className="w-[96%] ">
           <img src={t02} alt="" className="w-20 pt-15 " />
             <div className="flex justify-between">
       <h1 className="text-black flex items-center gap-2 mt-3 font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    </div>
    </div>
    </div>
       
      </SwiperSlide>

        <SwiperSlide>
        
           
           <div className="bg-[url('/imgs/t13.jpeg')] w-full h-43  bg-cover bg-center flex justify-center bg-[#00050d92]">
      
      <div className="w-[96%] ">
           <img src={t03} alt="" className="w-20 pt-17 " />
             <div className="flex justify-between">
       <h1 className="text-white flex items-center gap-2 mt-3 font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    </div>
    </div>
    </div>
       
      </SwiperSlide>

        <SwiperSlide>
        
           
           <div className="bg-[url('/imgs/t14.jpeg')] w-full h-43  bg-cover bg-center flex justify-center bg-[#00050d92]">
      
      <div className="w-[96%] ">
           <img src={t04} alt="" className="w-30 pt-20 " />
             <div className="flex justify-between">
       <h1 className="text-white flex items-center gap-2 mt- font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    </div>
    </div>
    </div>
       
      </SwiperSlide>
       <SwiperSlide>
        
           
           <div className="bg-[url('/imgs/t15.jpeg')] w-full h-43  bg-cover bg-center flex justify-center bg-[#00050d92]">
      
      <div className="w-[96%] ">
           <img src={t05} alt="" className="w-20 pt-17 " />
             <div className="flex justify-between">
       <h1 className="text-white flex items-center gap-2 mt- font-medium">
      <span className="text-amber-300 text-xl">
        <TbShoppingBag/>
      </span>
      Join Prime
    </h1>
    </div>
    </div>
    </div>
       
      </SwiperSlide>
 
    </Swiper>
        </div>


    </div>
  )
}

export default Tvshow

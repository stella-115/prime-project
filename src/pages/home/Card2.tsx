// import React from 'react'

import ani from "./../../assets/img/hero/ani.png"
import ani2 from "./../../assets/img/hero/ani2.png"
import ani4 from "./../../assets/img/hero/ani4.png"

const Card2 = () => {
  return (
    <div className=" w-full min-h-screen bg-black flex justify-center ">
        <div className="md:w-[95%] w-[90%] md:py-25 ">

             <div className=" md:flex md:items-center  justify-center gap-20 text-white">
            <div>
                <div className="md:flex-none md:justify-normal flex justify-center">
                    <img src={ani2} alt="" className=" " />

                </div>
                <h1 className=" md:text-[33px] text-[28px] font-bold mt-10 items-center md:ml-0 md:flex-none md:justify-normal flex justify-center">
                    Watch anywhere
                </h1>
                <h1 className=" md:mt-17 mt-6 font-medium md:text-[20px] text-[15px]  md:ml-0 md:flex-none md:justify-normal flex justify-center">
                    Enjoy from the web or with the Prime<br/> Video app on your phone, tablet, or <br/> select Smart TVs — on up to 3 devices<br/> at once.
                </h1>
            </div> 
            <div>
                <div className="md:flex-none md:justify-normal flex justify-center ">
                <img src={ani4} alt=""  className="mt-12 md:mt-0" />
                </div>

                <h1 className=" md:text-[33px] text-[28px] font-bold mt-8 items-center md:flex-none md:justify-normal flex justify-center">
                    X-Ray for more
                </h1>
                <h1 className=" md:mt-17 mt-6 font-medium md:text-[20px] text-[15px] md:flex-none md:justify-normal flex justify-center">
                    Use X-Ray for Movies and TV to <br/> identify actors and songs, explore <br/>actor bios, view trivia, and more.
                </h1>
            </div>
             <div>
                <div className=" md:flex-none md:justify-normal flex justify-center">
                <img src={ani} alt="" className="mt-12 md:mt-0"/>
                </div>

                <h1 className=" md:text-[33px] text-[30px] font-bold mt-8 md:ml-10 ml-0  md:flex-none md:justify-normal flex justify-center items-center ">
                    Data saver
                </h1>

                <h1 className=" md:mt-17 mt-6 font-medium md:text-[20px] text-[15px]  md:flex-none md:justify-normal flex justify-center pb-10 md:pb-0">
                    Control data usage while  <br/> downloading and watching videos<br/> on select phones or tablets.
                </h1>
            </div>

        </div>

        </div>
       

    </div>
  )
}

export default Card2
// import React from 'react'

import ani from "./../../assets/img/hero/ani.png"
import ani2 from "./../../assets/img/hero/ani2.png"
import ani4 from "./../../assets/img/hero/ani4.png"

const Card2 = () => {
  return (
    <div className=" w-full min-h-screen bg-black flex justify-center ">
        <div className="w-[95%] md:py-25 ">

             <div className=" md:flex md:items-center  justify-center gap-20 text-white">
            <div>
                <img src={ani2} alt="" className="" />
                <h1 className=" md:text-[33px] text-[28px] font-bold mt-10 items-center ml-10 md:ml-0">
                    Watch anywhere
                </h1>
                <h1 className=" md:mt-17 mt-6 font-medium md:text-[20px] text-[15px] ml-10 md:ml-0">
                    Enjoy from the web or with the Prime<br/> Video app on your phone, tablet, or <br/> select Smart TVs — on up to 3 devices<br/> at once.
                </h1>
            </div> 
            <div>
                <img src={ani4} alt=""  className="mt-12 md:mt-0" />

                <h1 className=" md:text-[33px] text-[28px] font-bold mt-8 items-center ml-10 md:ml-0">
                    X-Ray for more
                </h1>
                <h1 className=" md:mt-17 mt-6 font-medium md:text-[20px] text-[15px] ml-10 md:ml-0">
                    Use X-Ray for Movies and TV to <br/> identify actors and songs, explore <br/>actor bios, view trivia, and more.
                </h1>
            </div>
             <div>
                <img src={ani} alt="" className="mt-12 md:mt-0"/>

                <h1 className=" md:text-[33px] text-[30px] font-bold mt-8 ml-10 items-center">
                    Data saver
                </h1>

                <h1 className=" md:mt-17 mt-6 font-medium md:text-[20px] text-[15px] ml-10 md:ml-0 pb-10 md:pb-0">
                    Control data usage while  <br/> downloading and watching videos<br/> on select phones or tablets.
                </h1>
            </div>

        </div>

        </div>
       

    </div>
  )
}

export default Card2
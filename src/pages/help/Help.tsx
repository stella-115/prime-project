// import React from 'react'

import { IoIosArrowForward } from "react-icons/io"
import { IoSearchOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"

const Help = () => {
  return (
    <div className="w-full min-h-screen">
    <div className=" h-15 bg-black">  
    </div>
     <div className="h-13 border-b-gray-400 border-b bg-[#F2F4F6] flex justify-center"> 
        <div className="w-[92%] flex items-center">
            <h1 className="font-bold text-[20px]">
                 Help
            </h1>
        </div>

     </div>
       <div className="w-full min-h-screen flex justify-center">
            <div className="w-[92%] flex ">
                <div className="w-75 border-b border-r border-l border-gray-400  min-h-screen">
                    <h1 className="w-75 h-15 bg-[#F2F4F6] border-b border-r border-gray-400 flex justify-center items-center font-bold text-[20px]">
                        Prime Video Add-On <br/>Subscriptions </h1> 
                        <h1 className="flex justify-center text-[#1075b8] mt-3 text-[18px] hover:text-[#334373] ">
                            Issues Watching Prime Video<br/> Add-On Subscription While I <br/> Travel
                        </h1>
                         <h1 className="flex justify-center text-[#1075b8] mt-3 text-[18px] hover:text-[#334373]">
                            Cancel Your Prime Video Add-<br/> On Subscription
                        </h1>
                         <h1 className="flex justify-center text-[#1075b8] mt-3 text-[18px] hover:text-[#334373]">
                            Issues Accessing Content From<br/> External Providers
                        </h1>
                         <h1 className="flex justify-center text-[#1075b8] mt-3 text-[18px] hover:text-[#334373]">
                            What Is Included with Prime<br/> Video Add-On Subscriptions?
                        </h1>
                         <h1 className="flex justify-center text-[#1075b8] mt-3 text-[18px] hover:text-[#334373]">
                            Why Do I Have To Pay Extra for<br/> Prime Video Add-On <br/> Subscription? 
                        </h1>
                    <h1 className="flex justify-center text-[#1075b8] mt-3 text-[18px] hover:text-[#334373]">
                            Paying for Prime Video Add-On<br/> Subscription with Gift Cards
                        </h1>
                        <h1 className="w-75 h-12 bg-[#F2F4F6] border-b border-t border-r border-gray-400 pl-4 flex items-center text-[#1075b8] hover:text-[#334373]  text-[20px] gap-23">
                        See All Help topic 
                        <span className="text-gray-400 text-[30px]"><IoIosArrowForward /> 
                            </span></h1> 
                        <div className="w-75 bg-[#F2F4F6] py-6 border-r border-gray-400 ">
                              <h1 className="mx-7 w-60 h-12 border border-gray-400 hover:border-green-500 bg-white rounded-[3px]">
                          <h1 className="flex items-center gap-1 pl-3  py-3">
                             <span className="text-[22px] font-extrabold"> <IoSearchOutline/> </span> 
                              <input type="text" placeholder="Search Help" className="placeholder:font-medium placeholder:text-[17px] outline-none " />
                          </h1>
                        </h1>
                        <NavLink to="/joinprime">
                             <button className=" ml-7 mt-3 rounded-[3px] w-30 h-12 text-white bg-gray-800 hover:bg-gray-500 font-bold">
                            Contact Us
                        </button>

                        </NavLink>
                       
                        </div>
                </div>
                <div  className="pl-7 pt-5">
                    <h1 className="font-bold text-[21px] ">
                            Issues Watching Prime Video Add-On Subscriptions While I Travel
                        </h1>
                        <h1 className="text-gray-600 text-[17px] mt-1">Currently, Prime Video add-on subscriptions are only available to stream from within your home country.</h1>
                        <h1 className=" text-gray-400 mt-5">
                            <hr/>
                        </h1>

                    <h1 className="font-medium text-[16px] mt-3">
                        While traveling outside your home country, the selection of titles you’re able to stream on Prime Video may <br/> change. In addition to those titles, only titles that you’ve purchased or rented may be streamed while you’re <br/> traveling outside of your country of residence.
                    </h1>
                      <h1 className="font-medium text-[16px] mt-3">
                      <span className="font-bold"> Note:</span>  Residents of the European Union, while traveling within the European Union, have access to the same titles<br/> that are available when streaming from their country of residence. While traveling outside the European Union,<br/> residents of the European Union have access to stream and download Amazon Originals titles. As the United <br/> Kingdom has left the European Union, customers from the European Union traveling to the United Kingdom won’t <br/> have access to the same titles as they do when watching Prime Video in their home country.
                    </h1>
                </div>
                  

            </div>

        </div>
   

    </div>
   
    
  )
}

export default Help
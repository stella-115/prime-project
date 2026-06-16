// import React from 'react'
import smart from "../../assets/img/watch/smarttvblueray.png"
import stream from "../../assets/img/watch/StreamingMedia.png"
import game from "../../assets/img/watch/GameConsoles.png"
import tablet from "../../assets/img/watch/tablet.png"
import watch from "../../assets/img/watch/watchanywhere.png"
import carnival from "../../assets/img/watch/carnival.png"
import chrome from "../../assets/img/watch/Chromecast291x291.jpg"
import getty from "../../assets/img/watch/gettyimages.jpg"
import google from "../../assets/img/watch/amzn-google-app-button.png"
import app from "../../assets/img/watch/amzn-appl-app-button.png"
import galaxy from "../../assets/img/watch/amzn-samsung-app-button.png"
import windo from "../../assets/img/watch/amzn-windows-app-button.png"






const Watch = () => {
  return (
    <div className="w-full min-h-screen ">
        <div className="w-full h-15 bg-black">
        </div>
             <div className="bg-[url('/imgs/bg.jpg')] md:w-full w-80 h-80 bg-center bg-cover flex justify-end items-center">
             <div className="w-110 h-30 bg-whit md:mr-10 md:ml-0 ml-40">
                <h1 className="text-black md:text-[35px] text-[20px] font-medium ">
                Watch anywhere, anytime 
            </h1>
             <br/>
                <h1 className=" md:text-[20px] text-[10px] font-medium ">
                     Start watching Prime Video on your favorite devices anywhere, anytime
                </h1>    
        </div>
        </div>
        <div className=" md:ml-6 ml-2">
                 <h1 className=" md:text-[25px] text-[22px] text-[#737877] flex justify-center mt-2">
                Are you new to Prime?
            </h1>
            <div className="flex justify-center mt-3">
                 <button className="md:w-100 w-70  md:h-12 h-10 rounded-[3px] bg-[#0e7ad3] hover:bg-[#1A98FF] text-white md:text-[17px] text-[12px] font-medium ">
                Sign up for Prime Video (monthly membership)
            </button>
            </div>
            <h1 className="text-black md:text-[37px] text-[28px] mt-5">
                It's easy to watch Prime Video on your device.
            </h1>
            <h1 className="md:text-[18px] text-[13px] mt-8 text-[#555555]">
                Locate your device below, follow the simple instructions and you'll be able to start watching instantly. To learn more, go to <span className="text-[#0e7ad3] hover:underline hover:text-[#055393] cursor-pointer">
                    Devices Compatible with Prime Video.
                    </span>
            </h1>
           

            <div className=" md:flex mt-5">
                <img src={smart} alt=""  className="md:w-60 w-40 h-40 md:h-60  mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] mt-7">
                Smart TV or Blu-Ray Player
                <br/>
                <span className="text-[#555555] md:text-[18px]  text-[13px]">
                     1. If the Amazon Prime Video app isn't pre-installed on your Smart TV or Blu-ray player, download it from your device's app store.<br/>
                     2. Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.<br/>
                     3. Choose a movie or TV Show and start streaming.

                </span>
               
            </h1>

            </div>

            <div className=" md:flex  mt-5">
                <img src={stream} alt=""  className="md:w-60 w-40 h-40 md:h-60  mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] mt-7">
                Streaming Media Player
                <br/>
                <span className="text-[#555555] md:text-[18px]  text-[13px]">
                     1. Open the Prime Video app. If the app is not pre-installed, you can download it from your streaming media player's app store.<br/>
                     2.  Register your streaming media player in one of two ways:<br/>
                    Select "Sign in and start watching" to enter your account information directly on your device.<br/>
                    -or-
                    <br/>
                    Choose "Register on the Amazon Website" to get a 5-6 character code. <br/>
                     <span className="text-[#0e7ad3] hover:underline hover:text-[#055393] cursor-pointer">
                    Sign in to your Amazon account and enter your code
                    </span>


                </span>
               
            </h1>

            </div>
           
           <div className=" md:flex  mt-5">
                <img src={game} alt=""  className="md:w-60 w-40 h-40 md:h-60  mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] font-medium mt-7">
               Game console
                <br/>
                <span className="text-[#555555] md:text-[18px]  text-[18px]">
                     1. If the Amazon Prime Video app is not pre-installed on your console, download it from your console’s app store.<br/>
                     2. Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.<br/>
                     3. Choose a movie or TV Show and start streaming.

                </span>
               
            </h1>

            </div>
           
           <div className=" md:flex mt-5">
                <img src={tablet} alt=""  className="md:w-60 w-40 h-40 md:h-60  mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] font-medium mt-7">
                Fire Tablet
                <br/>
                <span className="text-[#555555] md:text-[18px]  text-[13px]">
                     1. Fire Tablet<br/>
                     2. Choose a movie or TV Show and start streaming.
                </span>
               
            </h1>

            </div>
           
           <div className=" md:flex mt-5">
                <img src={watch} alt=""  className="md:w-60 w-40 h-40 md:h-60 mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] font-medium mt-7">
               iOS Phone or Tablet
                <br/>
                <span className="text-[#555555] md:text-[18px]  text-[13px]">
                     1.  Go to the Apple app store on your device and download the Amazon Prime Video app.<br/>
                     2. Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.<br/>
                     3. Choose a movie or TV Show and start streaming directly from the app.

                </span>
               
            </h1>

            </div>
           
           <div className=" md:flex mt-5">
                <img src={carnival} alt=""  className="md:w-60 w-40 h-40 md:h-60  mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] font-medium mt-7">
                Android Phone or Tablet
                <br/>
                <span className="text-[#555555] md:text-[18px] text-[13px]">
                     1. Go to the Google Play app store on your device and download the Amazon Prime Video app.<br/>
                     2. Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.<br/>
                     3. Choose a movie or TV Show and start streaming directly from the app.
                </span> 
            </h1>
            </div>
           
           <div className=" md:flex mt-5">
                <img src={chrome} alt=""  className="md:w-60 w-40 h-40 md:h-60  mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] font-medium mt-7">
                Google Chromecast
                <br/>
                <span className="text-[#555555] md:text-[18px]  text-[13px]">
                     1. From the Prime Video app, select the Cast icon.<br/>
                     2.Select the Chromecast device you want to use. Note: Your iOS or Android device must be connected to the same Wi-Fi network as your Chromecast.<br/>
                     3. Select a title you want to watch. The title you have selected is shown on the TV that the Chromecast is connected to.


                </span>
               
            </h1>

            </div>

             <div className=" md:flex  mt-5">
                <img src={getty} alt=""  className="md:w-60 w-40 h-40 md:h-60 mt-9"/>
                 <h1 className="text-black md:text-[25px]  text-[20px] font-medium mt-7">
                Windows PC or Tablet
                <br/>
                <span className="text-[#555555] md:text-[18px] text-[13px]">
                     1. On your device, go to the Microsoft Store and download the Amazon Prime Video app.<br/>
                     2. Open the Amazon Prime Video app and sign in with your Amazon Prime or Prime Video account.<br/>
                     3. Choose a movie or TV show and watch in the app.
                </span>   
            </h1>
            </div>
           <h1 className=" md:text-[35px] text-[25px] text-[#737877] font-medium flex justify-center mt-2">
               Get the app
            </h1>
            <div className="flex justify-center my-5 gap-3 ">
                <img src={google} alt="" className="w-15 md:w-50"/>
                <img src={app} alt=""  className="w-15 md:w-50" />
                <img src={galaxy} alt=""  className="w-15 md:w-50" />
                <img src={windo} alt=""   className="w-15 md:w-50"/>

            </div>

           
           


        </div>
       

    </div>
  )
}

export default Watch
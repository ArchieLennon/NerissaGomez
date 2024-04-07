"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, {useState} from 'react'
import About from "./About";
import Video from "./Video";
import VidTitle from "./VidTitle";
import SplashScreen from "./SplashScreen";

export default function Navbar(){

    const [show, setShow] = useState(false);



    const [show2,setShow2] = useState(0);

 
    console.log(show2)

    const numbs = [5]






    const handleClick = () => {
        setShow2((show2) => {
          if (show2 > numbs.length ){
            return show2 + 1;
    
          } else {
    
            return show2 - 1;
          }
    
        })
      }
    









//`${ props.valueTing === 0 ? "J-HUS: IT'S CRAZY" : ""}`


    return(

      
<Disclosure as="nav">
    {({open}) => (
<>
{/* 
<Video blurValue = {show} /> */}

<button className={`${ show2 === 0 ? 'position: fixed top-0 left-0  w-screen h-screen text-1xl z-10':'position: fixed top-0 left-0  w-screen h-screen text-1xl z-10 pointer-events-none'}`} onClick={handleClick}>

</button>



<div className=" max-w6xl mx-auto px-4 sm:px-6 lg:px-8 text-1xl font-light text-white mb-0 ">
    <div className="flex justifiy-between h-16">
        <div className="flex justify-between w-full">
           
            <div className=" z-10 flex items-center">
                <Link href="/">
                    <h1 className=" text-xs  md:text-base font-light text-white line-clamp-2">
                    NERISSA GOMEZ 
                    </h1>

                </Link>
           
            </div>
            

            <Video blurValue = {show} />
            



            
            <div className=" z-10  sm:ml-6 sm:flex sm:space-x-8 sm:items-center font-light text-xs  md:text-base  text-white hover:text-gray-500 ">

                <button onClick={() =>setShow(!show)} className="h-full inline-flex items-center px-1 pt-1"> ABOUT 
                {show ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg> : null}
                </button>

                
            </div>
             
        </div>

       


       

<div className="-mr-2 flex items-center sm:hidden z-10 ">
    
    
</div>
</div>
</div>


{show2 === 0 ? <SplashScreen />:null}

{show? <About/>:null}


</>


    )}

</Disclosure>


    )

}
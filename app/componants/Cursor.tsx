"use client"
import { motion } from "framer-motion";
import { useEffect,useState } from "react";



function Cursor(){

  if (typeof window !== "undefined") {
    // Client-side-only code
  }
  
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
      });
    
      // console.log(mousePosition)
    
    
    useEffect(() => {
      const mouseMove = (e: { clientX: any; clientY: any; }) =>{
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
    
      }
    
    window.addEventListener("mousemove",mouseMove);
    return () =>{
      window.removeEventListener("mousemove",mouseMove)
    }
    },[]);
    
    const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    } 
    }



    return(

        <>
       

       
       
        <div className="w-screen h-screen text-white  position: fixed   -left-3 top-0  z-0 pointer-events-none active:pointer-events-auto">
        <motion.h1 
className=" active:text-gray-700"
variants={variants}
animate="default"
transition={{ ease: "easeOut", duration: 0 }}
>{variants.default.x > window.innerWidth/2 ? "NEXT " : "PREV"}</motion.h1>

        
</div>


        </>

    )
  


}
export default Cursor;
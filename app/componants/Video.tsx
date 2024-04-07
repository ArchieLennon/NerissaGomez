'use client'
import MuxPlayer from "@mux/mux-player-react";
import React, {useState,useEffect} from 'react'
import Bars from "./Bars";
import SplashScreen from "./SplashScreen";


// jhus   emtJR00wgcMzknrLT8VAmYM7CRQE2WUFxae00Q2DioqdM
// Moncler  4OraDMu6JKQxvbqsvUZzbuhMnS02qDW01E6JAIHzsRG3M
// tinder pg6xJ8l2n4zAAR8zoPjzaB00jIQVQ86k00RgYRMkjyaPM
// mowalola ZJ5jOtL3lRqeZx4PPekExrmkheTj59KXQeep2DYJtM8
// puma HK5GF02O602LcoGIWVMqPTYumlHjtHQJgw7ru8atZQA900
// jimmy choo oBK2gvrTr33lIAo00SjPblqNYvIB63EVDTDGb02biMEJM


const vid1 = "emtJR00wgcMzknrLT8VAmYM7CRQE2WUFxae00Q2DioqdM"
const vid2 = "4OraDMu6JKQxvbqsvUZzbuhMnS02qDW01E6JAIHzsRG3M"
const vid3 = "Prh9dyzn3aBx013G00PbF53ZSPpNTvBCqlmPNpzuTaUJA"
const vid4 = "ZJ5jOtL3lRqeZx4PPekExrmkheTj59KXQeep2DYJtM8"
const vid5 = "oBK2gvrTr33lIAo00SjPblqNYvIB63EVDTDGb02biMEJM"


export default function Video(props: { blurValue: boolean }) {






// mouse move bit

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






//cycle on click
  const vids = [vid1,vid2,vid3,vid4,vid5]

  const [currentVid, setCurrentVid] = useState(0);



    const handleClick = () => {
    setCurrentVid((currentVid) => {
      if (currentVid < vids.length - 1 && variants.default.x > window.innerWidth/2){
        return currentVid + 1;

      } else if (currentVid===0) {

        return currentVid + 1;
       
        
      } else {

        return currentVid - 1;
      }

    })
  }





const [Mute,setMute] = useState(true);








    return (
      <>
    
    
    

    

      {/* <Bars valueTing ={currentVid} ></Bars> */}

      <div className="items-center flex justify-center">
<div className="  z-10 items-center flex justify-center    text-xs  md:text-xs  font-light text-white mb-0 ">
      <h1>{`${ currentVid === 0 ? "J-HUS: IT'S CRAZY" : ""}`}</h1>
      <h1>{`${ currentVid === 1 ? "MONCLER X ADIDAS" : ""}`}</h1>
      <h1>{`${ currentVid === 2 ? "PUMA" : ""}`}</h1>
      <h1>{`${ currentVid === 3 ? "MOWALOLA" : ""}`}</h1>
      <h1>{`${ currentVid === 4 ? "JIMMY CHOO" : ""}`}</h1>
      </div>
      

      <div className="w-5 h-5 flex items-center justify-center ml-2">
    <button onClick={() =>setMute(!Mute)}className="z-20 bg-transparent active:gray-700"> {Mute ?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>):(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
)}
      
</button>
    </div>



<div className=" w-full h-1 flex justify-center items-center absolute md:top-14 top-12   pointer-events-auto ">

      <div className={`${ currentVid === 0 ? 'bg-white w-6 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-50'}`}></div>
      <div className={`${ currentVid === 1 ? 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-50'}`}></div>
      <div className={`${ currentVid === 2 ? 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-50'}`}></div>
      <div className={`${ currentVid === 3 ? 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-50'}`}></div>
      <div className={`${ currentVid === 4 ? 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-5 h-0.5 md:w-8 md:h-1 z-10 mx-0.5 opacity-50'}`}></div>
</div>
</div>
      


      
      <div onClick={handleClick} className={`${ props.blurValue === false ? 'position: fixed  w-screen left-0 top-0  z-1' : 'position: fixed  w-screen left-0 top-0  z-1 ease-in duration-100  blur-md'}`}>
        
      
      <MuxPlayer
      
        
        streamType="on-demand"
        playbackId= {vids[currentVid]}
        thumbnail-time="5"
        autoplay
        loop
        muted={Mute}
        metadata={{
          video_id: "video-id-54321",
          video_title: "J Hus - Crazy",
          viewer_user_id: "user-id-007",
        }}
        accentColor="#ffffffff"
      />


     </div>
     
     </>
     
    );
  }
  


  
  
//`${ props.valueTing === 0 ? 'bg-white w-8 h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-8 h-1 z-10 mx-0.5 opacity-50'}`

//{`${window.innerWidth/2 ? currentVid+1 : currentVid-1}`}
import React, {useState, useRef} from 'react'



const Bars = (props: { valueTing: number },{}) => {

   //

   

   const [Mute,setMute] = useState(true);
console.log(props.valueTing)
  
    return (
      <>
     
  <div className="items-center flex justify-center">



      
  
  <div className="  z-10 items-center flex justify-center text-xs  md:text-xs    font-light text-white mb-0 ">
        <h1>{`${ props.valueTing === 0 ? "J-HUS: IT'S CRAZY" : ""}`}</h1>
        <h1>{`${ props.valueTing === 1 ? "MONCLER X ADIDAS" : ""}`}</h1>
        <h1>{`${ props.valueTing === 2 ? "TINDER" : ""}`}</h1>
        <h1>{`${ props.valueTing === 3 ? "MOWALOLA" : ""}`}</h1>
        <h1>{`${ props.valueTing === 4 ? "EARTHEATER" : ""}`}</h1>
        </div>


        <div className="w-6 h-6 flex items-center justify-center ml-1">
      <button onClick={() =>setMute(!Mute)}className="z-20 bg-transparent active:gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
</button>
      </div>



  <div className=" w-full h-1 flex justify-center items-center absolute top-14   pointer-events-auto ">

        <div className={`${ props.valueTing === 0 ? 'bg-white w-8 h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-8 h-1 z-10 mx-0.5 opacity-50'}`}></div>
        <div className={`${ props.valueTing === 1 ? 'bg-white w-8 h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-8 h-1 z-10 mx-0.5 opacity-50'}`}></div>
        <div className={`${ props.valueTing === 2 ? 'bg-white w-8 h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-8 h-1 z-10 mx-0.5 opacity-50'}`}></div>
        <div className={`${ props.valueTing === 3 ? 'bg-white w-8 h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-8 h-1 z-10 mx-0.5 opacity-50'}`}></div>
        <div className={`${ props.valueTing === 4 ? 'bg-white w-8 h-1 z-10 mx-0.5 opacity-1' : 'bg-white w-8 h-1 z-10 mx-0.5 opacity-50'}`}></div>
</div>
</div>
  
   </>
    )
  }
  export default Bars
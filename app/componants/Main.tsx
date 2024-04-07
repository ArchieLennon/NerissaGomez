import React from "react";
import Image from "next/image";
import pic from '/Users/archielennnon/Desktop/portfolio-nextjs/651055.jpg'; 

const Main = () =>{
    return (
        

<div className="grid gap-4 sm:grid-cols-2 md: gap-6 lg:grid-cols-2 lg:gap-10 pt-8 ">
    <Image className=" rounded-lg "   
    alt="poop"
    src={pic} 
    
    width={500}
    height={200}>  
    
    </Image>
</div>
        


    )
}

export default Main;

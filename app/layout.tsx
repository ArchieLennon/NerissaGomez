
"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './componants/navbar'
import { Provider } from './componants/Provider'
import Video from './componants/Video'
import SplashScreen from './componants/SplashScreen'
import { useState } from 'react'
import dynamic from 'next/dynamic'


const DynamicCursor = dynamic(() => import('./componants/Cursor'),{
  ssr: false,
});




const inter = Inter({ subsets: ['latin'] })

//look into why i need this 

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {





  

  return (
    
    <html lang="en" suppressHydrationWarning>





      <body className={`${inter.className}  `}>

     
      



    <Provider>
    
    <Navbar/>


    



        <main className=" cursor-none max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}
        <DynamicCursor></DynamicCursor>

        {/* <div className="position: fixed top-0 left-0  w-screen h-screen" onClick={() =>setShow(!show)}>

</div>
{show ? <SplashScreen />:null} */}

        
        </main>
    </Provider>
        </body>
        
        
    </html>
    
  )
}

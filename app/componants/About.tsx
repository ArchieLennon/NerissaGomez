import Link from "next/link"


export default function About(){
    return (
        <>
<div className="flex w-full h-full justify-center  ">

<div className=" z-10 text-xs md:text-xs   font-light text-white  text-center  justify-center items-center max-w-prose pretty-text text-balance   pt-20      ">
<h1 className="font-medium pb-4 ">About Me</h1>
<a className="">
Nerissa is a Production Coordinator situated in London, she has extensive experience in fashion campaigns, runway shows, commercials, and music videos.<br/><br/>
Driven by a passion for both moving and still imagery, Nerissa is eager to contribute her expertise to your projects, possessing a sharp eye for artistic detail, she brings a versatile skill set and a commitment to excellence to every shoot.<br/><br/>
She excels in the fast-paced and ever-evolving environment of the short-form film industry. Her ability to adapt swiftly to changing demands, combined with a knack for problem-solving, ensures a seamless production process.<br/><br/>
Nerissa is open to freelance commissions and opportunities for creative collaborations.
</a>
<h2 className="pt-10">
    07706006878<br/>
    nerissa.aga@gmail.com<br/>
 {/* <Link href={"cref"} className="underline decoration-solid">Download CV here</Link> */}
 <a
 href="/NerissaGomez_CV.00.pdf"
 target="_blank" 
 rel="noopener noreferrer" 
download
 className="underline decoration-solid">Download CV Here</a>
</h2>
</div>

</div>

</>
    )
}
import React, { useEffect, useState } from "react";
import htmlLogo from "../assets/html-1.svg";
import javaScriptLogo from "../assets/logo-javascript.svg";
import cssLogo from "../assets/css-icon.svg";
import reactLogo from "../assets/react-2.svg";
import tailwindLogo from '../assets/tailwindcss.svg';
import gitLogo from '../assets/git-icon.svg';
import githubLogo from '../assets/github-icon.svg'
import firebaseLogo from '../assets/firebase-icon.svg';

const MobileSlideShow = () => {
    const [clickNumber, setClickNumber] = useState(0);
    const totalPages = 8;
    const clickHandler = (index)=>{
        setClickNumber(index)
    };
    useEffect(() => {
      const interval = setInterval(()=>{
        setClickNumber((prev)=>(prev === totalPages - 1 ? 0 : prev + 1));
      }, 5000)
      return ()=> clearInterval(interval);
    }, [])
    

  return (
    <div className="flex flex-col items-center justify-center md:hidden gap-3">
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 0 ? "": "hidden"}`}>
            <img src={htmlLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">HTML</p>
        </div>
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 1 ? "": "hidden"}`}>
            <img src={javaScriptLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">JavaScript</p>
        </div>
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 2 ? "": "hidden"}`}>
            <img src={cssLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">CSS</p>
        </div>
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 3 ? "": "hidden"}`}>
            <img src={reactLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">React</p>
        </div>
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 4 ? "": "hidden"}`}>
            <img src={tailwindLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">Tailwind</p>
        </div>
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 5 ? "": "hidden"}`}>
            <img src={gitLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">Git</p>
        </div>
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 6 ? "": "hidden"}`}>
            <img src={githubLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">Github</p>
        </div>
        <div className={`slideshow flex flex-col items-center justify-center ${clickNumber === 7 ? "": "hidden"}`}>
            <img src={firebaseLogo} alt="" className="h-20"/>
            <p className="text-lg font-bold text-white">Firebase</p>
        </div>
        <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index)=>(
            <button key={index} className={` rounded-full size-2 ${index === clickNumber? "bg-gray-500": "bg-white"}`} onClick={()=>clickHandler(index)}></button>
        ))}
        </div>
    </div>
  )
}

export default MobileSlideShow
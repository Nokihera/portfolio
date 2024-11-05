import React, { useEffect, useState } from "react";
import htmlLogo from "../assets/html-1.svg";
import javaScriptLogo from "../assets/logo-javascript.svg";
import cssLogo from "../assets/css-icon.svg";
import reactLogo from "../assets/react-2.svg";
import tailwindLogo from '../assets/tailwindcss.svg';
import gitLogo from '../assets/git-icon.svg';
import githubLogo from '../assets/github-icon.svg'
import firebaseLogo from '../assets/firebase-icon.svg';
const SlideShow = () => {
  const [paginationNum, setPaginationNum] = useState(0);
  const totalPages = 3;
  const clickPagination = (index)=>{
    setPaginationNum(index);
  }
  useEffect(() => {
    const interval = setInterval(()=>{
        setPaginationNum((prev)=> (prev === totalPages-1 ? 0 : prev + 1));
    }, 3000)
    return ()=> clearInterval(interval);
  }, [])
  return (
    <>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-6 ${
          paginationNum === 0 ? "" : "hidden"
        }`}
      >
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={htmlLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">HTML:5</p>
        </div>
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={javaScriptLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">JavaScript</p>
        </div>
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={cssLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">CSS</p>
        </div>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-6 ${
          paginationNum === 1 ? "" : "hidden"
        }`}
      >
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={reactLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">React</p>
        </div>
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={tailwindLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">Tailwind CSS</p>
        </div>
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={gitLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">Git</p>
        </div>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-6 ${
          paginationNum === 2 ? "" : "hidden"
        }`}
      >
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={githubLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">Github</p>
        </div>
        <div className="flex-col items-center justify-center space-y-2">
          <div className="flex justify-center">
            <img src={firebaseLogo} alt="" className="h-32" />
          </div>
          <p className="text-lg font-bold text-center">Firebase</p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-3 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={` rounded-full size-3 ${
              index === paginationNum ? "bg-gray-500" : "bg-white"
            }`}
            key={index}
            onClick={()=>clickPagination(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default SlideShow;

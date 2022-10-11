import React,{useEffect} from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";

import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {

 useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full h-full justify-center">
        <div className="flex flex-col items-center  w-full h-full justify-center">
          <ul className="flex p-2 gap-3 items-center justify-center"   data-aos="zoom-in-down"
             
                    data-aos-duration="1000"   >
            <li className="p-3 rounded-full bg-stone-300 cursor-pointer hover:scale-110 hover:bg-stone-400" >
             <a target="_blank" href="https://www.linkedin.com/in/paramkusham-alekhya-2a7556115/" rel="noreferrer"><BsLinkedin/></a> 
            </li>
            <li className="p-3 rounded-full bg-stone-300 cursor-pointer hover:scale-110 hover:bg-stone-400">
              <a target="_black" href="https://github.com/AlekhyaParamkusham" rel="noreferrer"><BsGithub /></a>
            </li>
            <li className="p-3 rounded-full bg-stone-300 cursor-pointer hover:scale-110 hover:bg-stone-400">
              <a target="_blank" href="mailto:paramkushamalekhya@gmail.com" rel="noreferrer"><MdEmail /></a>
            </li>
            <li className="p-3 rounded-full bg-stone-300 cursor-pointer hover:scale-110 hover:bg-stone-400">
              <ImProfile />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Social;
 
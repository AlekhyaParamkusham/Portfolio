import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { GrUserFemale } from "react-icons/gr";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center p-4">
          <ul className="hidden md:flex justify-center items-center gap-6">
            <li
              className="flex cursor-pointer uppercase tracking-widest text-lg  hover:scale-105 hover:text-rose-600"
              style={{ fontFamily: "Cuprum" }}
            >
              <a href="#about">About</a>
            </li>
            <li
              className="flex cursor-pointer uppercase tracking-widest text-lg lg:text-xl hover:scale-105 hover:text-rose-600"
              style={{ fontFamily: "Cuprum" }}
            >
              <a href="#skills">Skills</a>
            </li>
            <li style={{background:"#B2B1B9"}} className="flex justify-center items-center cursor-pointer capitalize p-2 rounded-full text-white hover:bg-gray-200 hover:text-black hover:duration-300 hover:scale-105" >
             <Link to="/" ><BiHomeSmile size={28} /></Link>
            </li>
            <li
              className="flex cursor-pointer uppercase tracking-widest text-lg hover:scale-105 hover:text-rose-600"
              style={{ fontFamily: "Cuprum" }}
            >
              <a href="#experience">Experience</a>
            </li>
            <li
              className="flex cursor-pointer uppercase tracking-widest text-lg  hover:scale-105 hover:text-rose-600"
              style={{ fontFamily: "Cuprum" }}
            >
             <Link to="/projects"> Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

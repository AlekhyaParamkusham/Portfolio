import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div
        className="flex justify-center items-center fixed top-0 z-10 right-0 w-full p-1"
        style={{
          background:
            "linear-gradient(90deg, rgba(72,71,79,1) 4%, rgba(83,82,89,1) 13%, rgba(145,142,142,1) 23%, rgba(125,97,100,1) 80%, rgba(103,89,93,1) 86%)",
        }}
      >
        <div className="flex justify-center items-center p-4">
          <ul className="hidden md:flex justify-center items-center gap-10 text-gray-50">
            <li
              className="flex cursor-pointer  tracking-widest  font-light text-md lg:text-lg  hover:scale-105 hover:text-rose-400"
              style={{ fontFamily: "Bebas Neue" }}
            >
              <a href="#about">About</a>
            </li>
            <li
              className="flex cursor-pointer  tracking-widest font-light text-md lg:text-lg hover:scale-105 hover:text-rose-400"
              style={{ fontFamily: "Bebas Neue" }}
            >
              <a href="#skills">Skills</a>
            </li>

            <li
              className="flex cursor-pointer  tracking-widest font-light text-md lg:text-lg hover:scale-105 hover:text-rose-400"
              style={{ fontFamily: "Bebas Neue" }}
            >
              <a href="#experience">Experience</a>
            </li>
            <li
              className="flex cursor-pointer  tracking-widest font-light text-md lg:text-lg  hover:scale-105 hover:text-rose-400"
              style={{ fontFamily: "Bebas Neue" }}
            >
              <a href="#projects"> Projects</a>
            </li>
            <li
              className="flex cursor-pointer  tracking-widest font-light text-md lg:text-lg  hover:scale-105 hover:text-rose-400"
              style={{ fontFamily: "Bebas Neue" }}
            >
              <a href="#footer"> Contact</a>
            </li>
          </ul>

          {/* </div> */}

          {/* <div className="md:hidden flex justify-center items-center p-4"> */}
          <div
            className="HAMBURGER-ICON space-y-1.5 flex md:hidden flex-col "
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav glassNav" : "hideMenuNav glassNav"}  
          // style={{background:"#967E76"}}
          >
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              
            >
              <svg
                className="h-8 w-8 text-gray-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex justify-center items-center gap-8 text-black flex-col" >
              <li
                className="flex cursor-pointer  tracking-widest  font-light text-md lg:text-xl  hover:scale-105 hover:text-rose-400 border-b border-b-stone-700"
                style={{ fontFamily: "Bebas Neue" }}
                onClick={() => setIsNavOpen(false)}
              >
                <a href="#about" >About</a>
              </li>
              <li
                className="flex cursor-pointer  tracking-widest font-light text-md lg:text-xl hover:scale-105 hover:text-rose-400 border-b border-b-stone-700"
                style={{ fontFamily: "Bebas Neue" }}
                 onClick={() => setIsNavOpen(false)}
              >
                <a href="#skills">Skills</a>
              </li>

              <li
                className="flex cursor-pointer  tracking-widest font-light text-md lg:text-xl hover:scale-105 hover:text-rose-400 border-b border-b-stone-700"
                style={{ fontFamily: "Bebas Neue" }}
                 onClick={() => setIsNavOpen(false)}
              >
                <a href="#experience">Experience</a>
              </li>
              <li
                className="flex cursor-pointer  tracking-widest font-light text-md lg:text-xl  hover:scale-105 hover:text-rose-400 border-b border-b-stone-700"
                style={{ fontFamily: "Bebas Neue" }}
                 onClick={() => setIsNavOpen(false)}
              >
                <a href="#projects"> Projects</a>
              </li>
              <li
                className="flex cursor-pointer  tracking-widest font-light text-md lg:text-xl  hover:scale-105 hover:text-rose-400 border-b border-b-stone-700"
                style={{ fontFamily: "Bebas Neue" }}
                 onClick={() => setIsNavOpen(false)}
              >
                <a href="#footer"> Contact</a>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

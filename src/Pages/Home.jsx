import React from "react";
import {Link} from "react-router-dom"

import Profile from "./../Images/Profile.jpg";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import { MdOutlineDoubleArrow } from "react-icons/md";

import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import ScrollTop from "../components/ScrollTop";
import "./home.css"



const Home = () => {

  


  return (
    <>
   

      <div className="flex-col">
        <div
          className="flex items-center justify-center w-full h-screen p-10 text-center"
          // style={{ background: "#F6F6F6" }}
          // style={{ background: "#4A403A" }}
          style={{background: "linear-gradient(90deg, rgba(72,71,79,1) 4%, rgba(83,82,89,1) 13%, rgba(145,142,142,1) 23%, rgba(125,97,100,1) 80%, rgba(103,89,93,1) 86%)"}}
        >
          <div className="flex items-center justify-center w-full h-full flex-col border border-dashed p-2 bg-white rounded-md">
//             <Navbar />
            <div className="flex flex-col items-center justify-center w-full h-5/6 md:h-full md:flex-row gap-3">
              <div className="flex flex-1 flex-col items-center justify-center gap-3">
                <h1
                  className="text-3xl lg:text-5xl tracking-wider font-medium capitalize font-mono text-rose-600"
                  style={{ fontFamily: "Amatic SC" }}
                >
                  Alekhya Paramkusham
                </h1>
                <p className="text-md lg:text-lg text-gray-600 tracking-wider">
                  MERN Stack Developer
                </p>
                 <Link to="/projects">
                <button className="flex  justify-center items-center bg-gray-600  gap-1 md:gap-2  text-white px-4 py-2 text-xs md:text-sm rounded-full mt-3 md:mt-10 tracking-wider hover:bg-gray-200 hover:text-black hover:border hover:border-gray-400 hover:font-semibold hover:border-dashed">
                Projects <MdOutlineDoubleArrow />
                </button>
                </Link> 
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-4 gap-4">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-40 h-40 md:w-6/12 md:h-6/12 lg:w-72 lg:h-72 rounded-full shadow-xl hover:scale-105 duration:300"
                />
                <Social />
              </div>
            </div>
          </div>
        </div>
        <About />
        <Experience />
        <Skills />
        <ScrollTop/>
      </div>
    </>
  );
};

export default Home;

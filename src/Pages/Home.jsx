import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import Profile from "./../Images/Profile.jpg";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import ScrollTop from "../components/ScrollTop";
import "./home.css";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="flex-col relative ">
        <Navbar />
        <div className="flex-col absolute z-0">
          <div
            className="flex items-center justify-center w-full h-screen  p-8 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(72,71,79,1) 4%, rgba(83,82,89,1) 13%, rgba(145,142,142,1) 23%, rgba(125,97,100,1) 80%, rgba(103,89,93,1) 86%)",
            }}
          >
            <div className="myCSS flex items-center justify-center w-full flex-col p-2 bg-white">
              <div className="flex flex-col items-center justify-center w-full md:h-full md:flex-row gap-3">
                <div className="flex flex-1 flex-col items-center md:items-start justify-center gap-3 md:p-10">
                  <h1
                    className="text-3xl lg:text-5xl tracking-wider font-medium capitalize font-mono text-rose-600"
                    style={{ fontFamily: "Amatic SC" }}
                    data-aos="zoom-out"
                    data-aos-delay="1000"
                    data-aos-duration="2000"
                  >
                    Alekhya Paramkusham
                  </h1>
                  <p className="text-md lg:text-lg text-gray-600 tracking-wider" data-aos="fade-in"
                    data-aos-delay="6000"
                    data-aos-duration="3000">
                    Full Stack Developer
                    
                  </p>
                  <p className="text-xs lg:text-md text-gray-800 lg:tracking-wider font-mono text-center md:text-left" >Passionate about building efficient, user-friendly and responsive websites. </p>
                  <a href="#projects">
                    <button className="flex  justify-center items-center bg-gray-600  gap-1 md:gap-2  text-white px-4 py-2 text-xs md:text-sm rounded-full mt-3 md:mt-10 tracking-wider hover:bg-gray-200 hover:text-black hover:border hover:border-gray-400 hover:font-semibold hover:border-dashed">
                      Projects <MdOutlineDoubleArrow />
                    </button>
                  </a>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center p-4 gap-2 md:gap-4" >
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-40 h-40 md:w-6/12 md:h-6/12 lg:w-72 lg:h-72 rounded-full shadow-xl hover:scale-105 duration:300"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  />
                  <div className="flex items-center justify-center gap-1 md:gap-2 w-5/6 md:w-1/2">
                    <p
                      style={{ fontFamily: "Bebas Neue" }}
                      className="text-md md:text-xl text-gray-800 px-1 py-1 border-b border-b-red-400 cursor-pointer hover:text-gray-600 hover:tracking-wider" 
                    >
                     <a target="_blank" href="mailto:paramkushamalekhya@gmail.com" rel="noreferrer">Email Me</a>
                    </p>
                    <span className="p-1">  •  </span>
                    <ul className="flex p-1 gap-3 items-center justify-center ">
                      <li className="p-3 rounded-full bg-stone-300 cursor-pointer hover:scale-110 hover:bg-stone-200">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/paramkusham-alekhya-2a7556115/"
                          rel="noreferrer"
                        >
                          <BsLinkedin  size={16}/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Footer />
          <ScrollTop />
        </div>
      </div>
    </>
  );
};

export default Home;

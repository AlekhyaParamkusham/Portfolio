import React from "react";
import "./home.css"

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex justify-center items-center  p-4 md:p-10"
      style={{ background: "#EEEEEE" }}
    >
      <div className="flex flex-col  justify-center items-center w-full lg:w-11/12 bg-white p-6 lg:py-6 lg:px-10 gap-4">
        <h1 className="text-2xl tracking-wider font-bold text-red-500 mb-3 ">
          EXPERIENCE
        </h1>
       

        <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 w-full md:w-full p-3">
          <div className="flex flex-1 flex-col   gap-2">
            
           <h2 className="text-sm font-semibold text-slate-600 tracking-wide uppercase p-1 w-max text-left" style={{background:"#EFEFEF"}}>FULL STACK WEB DEVELOPER</h2>
            <p style={{fontFamily:'Barlow'}} className="text-sm font-medium tracking-wider text-left text-red-600">Upskilling & Freelancing | 2021 - Present</p>
                  <ul className="flex flex-col gap-4 border-l-2 px-3 py-2">  <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
              Got skilled in MERN Stack Web Development via GUVI (IITM incubated) platform's Full Stack Web Development program.
            </li>
            <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
              Built fully responsive, accessible web pages using React and Node JS.
            </li>
            <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
             Do check my projects here!
            </li></ul>
            
            
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <h2 className="text-sm font-semibold text-slate-600 tracking-wide uppercase p-1 text-left w-max" style={{background:"#EFEFEF"}}>APPLICATION DEVELOPMENT ANALYST</h2>
            <p style={{fontFamily:'Barlow'}} className="text-sm font-medium tracking-wider text-left text-red-600">Accenture Service Pvt.Ltd | 2019 - 2021</p>
                  <ul className="flex flex-col gap-4 border-l-2 px-3 py-2"> <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
              Led the team in bridging the gap between On-shore and
              off-shore, handling critical server issues.
            </li>
            <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
              Performed migration activities with the upgradation of billing
              servers.
            </li>
            <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
              Received ACE award for excellency and being a critical resource
              for the contribution towards major billing migrations of the
              client.
            </li></ul>
           
            </div>

 <div className="flex flex-1 flex-col gap-2">
            <h2 className="text-sm font-semibold text-slate-600 tracking-wide uppercase text-left p-1 w-max" style={{background:"#EFEFEF"}}>APPLICATION DEVELOPMENT ASSOCIATE</h2>
            <p style={{fontFamily:'Barlow'}} className="text-sm font-medium tracking-wider text-left text-red-600">Accenture Service Pvt.Ltd | 2017 – 2019</p>
             <ul className="flex flex-col gap-4 border-l-2 px-3 py-2"> 
            <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
              Performed incident analysis and bug fix for many Telecom billing
              related issues.
            </li>
            <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none">
              Performed performance enhancement activities of the Linux servers.
            </li>
            <li className="text-sm text-gray-800 text-left tracking-wide leading-relaxed list-none" >
              Received APEX award for the quarter in the team and also received
              multiple client appreciations.
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

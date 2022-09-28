import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="flex justify-center items-center my-6 p-6">
        <div className="flex flex-col justify-center items-center lg:w-5/6 bg-white p-5 lg:py-6 lg:px-10 gap-4 border border-dashed border-gray-300">
          <h1 className="text-2xl tracking-wider font-bold text-red-500 mb-3">ABOUT ME</h1>
           <p className="text-red-700">--- To be updated! ---</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="flex flex-1 flex-col md:flex-2 justify-center items-start">
            <p style={{fontFamily: 'Hind Madurai'}} className="text-md tracking-wider font-light p-1 lg:p-3">
              Hi there! I'm <span className="font-medium">Alekhya</span>, a Full Stack(MERN) Developer based out of
              Hyderabad, having about 4 years of professional experience.
            </p>

          </div>
          <div className="flex flex-1 flex-col justify-center items-center md:items-end pt-6 p-2 lg:p-3 gap-2 border-t md:border-t-0 md:border-l border-dashed" >
            <h2 className="text-md font-semibold text-slate-600 tracking-wide uppercase p-1" style={{background:"#EFEFEF"}}>Education</h2>
            <p style={{fontFamily:'Barlow'}} className="text-sm font-light md:tracking-wide text-center lg:text-right" >Electronics and Communication Engg. (2013 - 2017)</p>
            <p className="italic text-xs text-gray-500 text-center lg:text-right">G.Narayanamma Institute of Technology and Sciences</p>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import skillsData from "./../skillsdata";

const Skills = () => {
  return (
    <div id="skills" className="flex justify-center items-center   p-10" style={{background: "#F7F7F7"}}>
      <div className="flex flex-col justify-center items-center lg:w-5/6  p-5 lg:py-6 lg:px-10 gap-4 border border-dashed border-gray-300">
        <h1
          className="text-2xl tracking-wider font-bold text-red-500 mb-3"
          style={{ transform: "translateY(0%)" }}
        >
          SKILLS
        </h1>
        <div className="justify-items-center items-center w-full gap-6 grid  grid-cols-2 md:grid-cols-5">
          {/* <div className="flex flex-1 justify-center items-center">
            <ul className="flex flex-wrap gap-2 justify-center items-center" style={{ fontFamily: "Hind Madurai" }}>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 ">React</li>
              <li className="border bg-gray-300  py-1 px-2 rounded-lg text-gray-600 tracking-wider" >Javascript</li>
               <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider" >HTML</li>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider" >CSS</li>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider" >Tailwind CSS</li>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider" >Boostrap</li>
              <li className="border bg-gray-300  py-1 px-2 rounded-lg text-gray-600 tracking-wider" >Sass</li>
             
              </ul>
          </div>
          <div className="flex flex-1 justify-center items-start">
            <ul className="flex flex-wrap gap-2 justify-start items-start" style={{ fontFamily: "Hind Madurai" }}>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider">Node</li>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider">Express</li>
              

             </ul></div>
          <div className="flex flex-1 justify-center items-center ">
            <ul className="flex flex-wrap gap-2 justify-center items-center" style={{ fontFamily: "Hind Madurai" }}>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider">Mongo DB</li>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider">MySQL</li>
              <li className="border bg-gray-300 py-1  px-2 rounded-lg text-gray-600 tracking-wider">Oracle</li>
            </ul>
          </div> */}

          {skillsData.map((ele) => (
            <div className="flex justify-center items-center object w-11/12 flex-col overflow-hidden gap-3 p-4     font-semibold text-md rounded-2xl shadow-xl " style={{background: "#F9F9F9"}}>
              <img className="flex w-1/2" src={ele.url} />
              <p className="flex md:tracking-wider text-sm text-center">{ele.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

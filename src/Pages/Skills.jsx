import React, { useEffect } from "react";
import skillsData from "./../skillsdata";
import "./projects.css";
import icon from "./../Images/shell-icon.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="skills" className="flex justify-center items-center p-10">
      <div
        className="flex flex-col justify-center items-center lg:w-5/6  p-5 lg:py-6 lg:px-10 gap-4 "
        style={{ background: "#EEF2E6" }}
      >
        <h1 className="text-2xl tracking-wider font-bold text-red-500 mb-3">
          SKILLS
        </h1>

        <div className="row">
          {skillsData.map((ele) => (
            <div className="column bg-white" data-aos="fade-in" data-aos-duration="2000" >
              <img className="flex w-1/2" src={ele.url} />
              <p className="flex md:tracking-wider text-sm text-center">
                {ele.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex justify-center items-center my-6 p-10 bg-white "
      >
        <div
          className="flex flex-col justify-center items-center lg:w-5/6 p-7 lg:py-6 lg:px-10 gap-4 "
          style={{ background: "#F6F6F6" }}
        >
          <h1 className="text-2xl tracking-wider font-bold text-red-500 mb-3">
            ABOUT ME
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="flex flex-1 flex-col md:flex-2 justify-center items-start gap-4 md:gap-2 ">
              <p
                style={{ fontFamily: "Barlow"}}
                className="text-md tracking-wide text-black  p-1 lg:p-3 "
              >
                Hi there! I'm <span className="font-medium">Alekhya</span>, a
                Full Stack (MERN) Developer based out of Hyderabad, having about
                4 years of professional experience.
              </p>
              <p
                style={{ fontFamily: "Barlow"}}
                className="text-md tracking-wide text-black  p-1 lg:p-3 "
              >
                Apart from work, I find myself passionate in putting forth
                stories via embroidery hoop art (@StoryOnHoops). {" "}
                {/* <br /> */}
                I found Web Development to be a perfect union to my interest of
                creating user experience and coding. <br />I took time and got
                familiar with MERN stack and put my knowledge into creating
                functional and efficient websites.
              </p>
            <p
                style={{ fontFamily: "Barlow"}}
                className="text-md tracking-wide text-black  p-1 lg:p-3 "
              >
                I'm open to working with an excited team of passionate people,
                contributing my skills in building great experiences.
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center  p-2 gap-8 border-t md:border-t-0 md:border-l border-dashed md:border-gray-500 h-full">
              <div className="flex flex-1 flex-col justify-center items-center md:items-start w-full pt-6 p-2 lg:p-3 gap-2">
                <h2
                  className="text-lg font-semibold text-slate-600 tracking-wider uppercase p-1"
                  style={{background:"#EFEFEF"}}
                >
                  Education
                </h2>
                <p
                  style={{ fontFamily: "Barlow" }}
                  className="text-md md:tracking-wide text-center lg:text-right"
                >
                  Electronics and Communication Engg. (2013 - 2017)
                </p>
                <p className="italic text-sm text-gray-500 text-center lg:text-right">
                  G.Narayanamma Institute of Technology and Sciences
                </p>
              </div>
              <div className="flex flex-1 justify-center items-center flex-col md:items-start w-full p-2 lg:p-3 gap-4 ">
               
                <p className="text-md tracking-wide text-black "  style={{ fontFamily: "Barlow" }}>Feel free to check my resume here!</p>
                <button className="flex justify-center items-center p-2 border-2 border-black tracking-widest text-sm hover:bg-gray-700 hover:scale-105 hover:text-white hover:border-gray-700">VIEW RESUME</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

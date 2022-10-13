import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";

import live from "./../Images/click.png";
import git from "./../Images/github.png";

import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";
import Loading from "../components/Loading";

import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const Projects = () => {
  const [values, setValues] = useState([]);
  const [values1, setValues1] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "PROJECTS"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        arr.push({
          image: vals.image,
          liveURL: vals.liveURL,
          githubURL: vals.githubURL,
          tech: vals.tech,
          id: doc.id,
          ID: vals.ID,
        });
      });
      setValues(arr);
      setLoading(false);
    };

    const fetchData1 = async () => {
      const querySnapshot = await getDocs(collection(db, "MORE-PROJECTS"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        arr.push({
          image: vals.image,
          liveURL: vals.liveURL,
          githubURL: vals.githubURL,
          tech: vals.tech,
          id: doc.id,
        });
      });
      setValues1(arr);
    };

    fetchData();
    fetchData1();
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="flex justify-center items-center flex-col p-10"
          id="projects"
          style={{ background: "#EEEEEE" }}
        >
          <div className="flex flex-col  justify-center items-center w-full  bg-white p-7 ">
            <h1 className="text-2xl tracking-wider font-bold text-red-500 ">
              PROJECTS
            </h1>

            <div className="justify-items-center items-center w-full h-full flex-col md:px-2 p-8 lg:p-16 md:gap-4 lg:gap-6 gap-8 grid  grid-cols-1 md:grid-cols-2  bg-white">
              {values
                .sort((a, b) => a.ID - b.ID)
                .map((project) => (
                  <div
                    className="flex justify-center items-center md:w-11/12 lg:w-5/6 flex-col pb-4  shadow-2xl"
                    // style={{ background: "#FEFBE7" }}
                    style={{ backgroundColor: "#FAF7F0" }}
                    key={project.id}
                  >
                    <a
                      href={project.liveURL}
                      target="_blank"
                      rel="noreferrer"
                      data-aos="zoom-in-up"
                      data-aos-duration="3000"
                    >
                      <img
                        src={project.image}
                        className="w-full hover:-translate-y-2 cursor-pointer hover:opacity-90"
                        style={{ transition: "all 0.3s ease-in-out" }}
                      />
                    </a>

                    <div className="flex justify-center items-center p-4 text-center gap-3 m-2 ">
                      {project.tech.map(({ name, url }) => (
                        <div className="tooltip">
                          <img
                            src={url}
                            alt={name}
                            className="w-12 h-12 hover:scale-110 border p-1 rounded-lg shadow-lg"
                          />
                          <span className="tooltiptext">{name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center w-max px-4 md:gap-4 gap-6 ">
                      <button>
                        <a
                          href={project.liveURL}
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center items-center gap-1"
                        >
                          <img
                            className="w-12 h-12 hover:scale-110"
                            src={live}
                          />
                          <p
                            className="text-sm font-semibold font-mono border-b hover:border-b-2 hover:border-red-600 hover:tracking-wider"
                            style={{ color: "#FF5B00" }}
                          >
                            Visit Website
                          </p>
                        </a>
                      </button>

                      <button>
                        <a
                          href={project.githubURL}
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center items-center gap-1 "
                        >
                          <img className="w-8 h-8 hover:scale-110 " src={git} />
                          <p
                            className="text-sm font-semibold font-mono border-b hover:border-b-2 hover:border-red-600 hover:tracking-wider"
                            style={{ color: "#FF5B00" }}
                          >
                            View code
                          </p>
                        </a>
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <div className=" flex justify-center items-center flex-col py-6 mb-5 w-full  bg-white ">
              {show && (
                <div className="justify-items-center items-center w-full h-full flex-col md:px-2 p-8 lg:p-16 md:gap-4 gap-8 grid  grid-cols-1 md:grid-cols-2  bg-white">
                  {values1.map((project) => (
                    <div
                      className="flex justify-center items-center md:w-11/12 lg:w-5/6 flex-col pb-4  shadow-2xl"
                      // style={{ background: "#FEFBE7" }}
                      style={{ backgroundColor: "#FAF7F0" }}
                      key={project.id}
                    >
                      <a
                        href={project.liveURL}
                        target="_blank"
                        rel="noreferrer"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                      >
                        {" "}
                        <img
                          src={project.image}
                          className="w-full hover:-translate-y-2 cursor-pointer hover:opacity-90"
                          style={{ transition: "all 0.3s ease-in-out" }}
                        />
                      </a>

                      <div className="flex justify-center items-center p-4 text-center gap-3 m-2">
                        {project.tech.map(({ name, url }) => (
                          <div className="tooltip">
                            <img
                              src={url}
                              alt={name}
                              className="w-12 h-12 hover:scale-110 border p-1 rounded-lg shadow-lg"
                            />
                            <span className="tooltiptext">{name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center items-center w-max px-4 md:gap-4 gap-6">
                        <button>
                          <a
                            href={project.liveURL}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center gap-1"
                          >
                            <img
                              className="w-12 h-12 hover:scale-110"
                              src={live}
                            />
                            <p
                              className="text-sm font-semibold font-mono border-b hover:border-b-2 hover:border-red-600 hover:tracking-wider"
                              style={{ color: "#FF5B00" }}
                            >
                              Visit Website
                            </p>
                          </a>
                        </button>

                        <button>
                          <a
                            href={project.githubURL}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center gap-1 "
                          >
                            <img
                              className="w-8 h-8 hover:scale-110 "
                              src={git}
                            />
                            <p
                              className="text-sm font-semibold font-mono border-b hover:border-b-2 hover:border-red-600 hover:tracking-wider"
                              style={{ color: "#FF5B00" }}
                            >
                              View code
                            </p>
                          </a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button
                className="flex justify-center items-center p-3 bg-gray-800  text-white tracking-widest text-xl md:text-2xl rounded-lg"
                style={{ fontFamily: "Amatic SC" }}
                id="myBtn"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? `Hide projects` : `More projects`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

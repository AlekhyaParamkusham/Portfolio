import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";

import live from "./../Images/live.png";
import git from "./../Images/git.png";

import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";
import Loading from "../components/Loading";

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
  }, []);

  return (
    <>
       {loading ? (
          <Loading />
        ) : (
      <div className="flex justify-center items-center flex-col">
        <div
          className="flex justify-center items-center w-full h-20 p-4 gap-7"
          style={{ background: "#433D3C" }}
        >
          <li
            style={{ background: "#B2B1B9" }}
            className="flex justify-center items-center text-left cursor-pointer capitalize p-2 rounded-full text-white hover:bg-gray-200 hover:text-black hover:duration-300 hover:scale-105"
          >
            <Link to="/">
              <BiHomeSmile size={28} />
            </Link>
          </li>
          <h2
            className="flex justify-center items-center text-3xl tracking-widest font-extrabold text-white"
            style={{ fontFamily: "Amatic SC" }}
          >
            PROJECTS
          </h2>
        </div>

     
          <div className="justify-items-center items-center w-full h-full  p-16 gap-8 grid  grid-cols-1 md:grid-cols-2">
            {values.map((project) => (
              <div
                className="flex justify-center items-center lg:w-5/6 flex-col pb-4 rounded-2xl shadow-2xl"
                style={{ background: "#FEFBE7" }}
                key={project.id}
              >
                <img
                  src={project.image}
                  className="w-full hover:-translate-y-2 cursor-pointer hover:opacity-90"
                  style={{ transition: "all 0.3s ease-in-out" }}
                />
                <div className="flex justify-center items-center p-5 text-center">
                  <ul className="flex gap-3 justify-center items-center text-xs text-white">
                    {project.tech.map((val) => (
                      <li className="py-1 px-2 rounded-2xl bg-gray-200 text-gray-900 italic ">
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center items-center w-max px-4 gap-3 ">
                  <button>
                    <a href={project.liveURL} target="_blank" rel="noreferrer">
                      <img className="w-16 h-16 hover:scale-110" src={live} />
                    </a>
                  </button>

                  <button>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="w-12 h-12 hover:scale-110" src={git} />
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
   

        <div className=" flex justify-center items-center flex-col p-4 mb-5">
          <button
            className="flex justify-center items-center p-3 bg-gray-800  text-white tracking-widest text-xl md:text-2xl rounded-lg"
            style={{fontFamily: 'Amatic SC'}}
            onClick={() => setShow(!show)}
          >
            {show ? `Hide projects` : `More projects`}
          </button>
          {show && (
            <div className="justify-items-center items-center w-full h-full  p-16 gap-8 grid  grid-cols-1 md:grid-cols-2">
              {values1.map((project) => (
                <div
                  className="flex justify-center items-center lg:w-5/6 flex-col pb-4 rounded-2xl shadow-2xl"
                  style={{ background: "#FEFBE7" }}
                  key={project.id}
                >
                  <img
                    src={project.image}
                    className="w-full hover:-translate-y-2 cursor-pointer hover:opacity-90"
                    style={{ transition: "all 0.3s ease-in-out" }}
                  />
                  <div className="flex justify-center items-center p-5 text-center">
                    <ul className="flex gap-3 justify-center items-center text-xs text-white">
                      {project.tech.map((val) => (
                        <li className="py-1 px-2 rounded-2xl bg-gray-200 text-gray-900 italic ">
                          {val}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center items-center w-max px-4 gap-3 ">
                    <button>
                      <a
                        href={project.liveURL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="w-16 h-16 hover:scale-110" src={live} />
                      </a>
                    </button>

                    <button>
                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="w-12 h-12 hover:scale-110" src={git} />
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
           )}
    </>
  );
};

export default Projects;

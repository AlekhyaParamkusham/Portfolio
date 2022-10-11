import React from "react";
import Social from "../components/Social";
import "./projects.css";

const Footer = () => {
  return (
    <>
      <div
        className="flex items-center justify-around py-5 md:py-10 flex-col gap-3"
        id="footer"
        style={{
          background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5xpaCAkp0ciB2_ApKDs4PbRqhZKqMeXW_VMEM86Q2Foht7MXFc1JwZfhKiXwyAD-dQ&usqp=CAU")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-around p-3 md:p-6 gap-3 flex-col h-full w-2/3 md:w-1/2 shadow-2xl glass">
          <div className="flex flex-1 items-center justify-center">
            <h1
              className="text-3xl md:text-4xl tracking-wider font-light text-red-500 mb-3"
              style={{ fontFamily: "Square Peg", color: "#EEEEEE" }}
            >
              Get in touch!
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

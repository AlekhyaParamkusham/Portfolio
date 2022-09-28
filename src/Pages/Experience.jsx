import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex justify-center items-center my-6 p-4 md:p-10"
      style={{ background: "#EEEEEE" }}
    >
      <div className="flex flex-col  justify-center items-center w-full lg:w-5/6 bg-white p-6 lg:py-6 lg:px-10 gap-4 border border-dashed border-gray-300">
        <h1 className="text-2xl tracking-wider font-bold text-red-500 mb-3 ">
          EXPERIENCE
        </h1>
        <p className="text-red-700">--- To be updated! ---</p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-3 md:gap-10 w-5/6 md:w-full p-3">
          <div className="flex flex-1 flex-col  gap-2">
            <p className="text-red-700">--- Duplicate Data!! ---</p>
           <h2 className="text-sm font-semibold text-slate-600 tracking-wide uppercase p-1 w-max" style={{background:"#EFEFEF"}}>APPLICATION DEVELOPMENT ANALYST</h2>
            <p style={{fontFamily:'Barlow'}} className="text-sm font-medium md:tracking-wide text-center lg:text-right">Accenture Service Pvt.Ltd | 2019 - 2021</p>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Led the team in bridging the gap between On-shore and
              off-shore, handling critical server issues.
            </li>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Performed migration activities with the upgradation of billing
              servers.
            </li>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Received ACE award for excellency and being a critical resource
              for the contribution towards major billing migrations of the
              client.
            </li>
            
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <h2 className="text-sm font-semibold text-slate-600 tracking-wide uppercase p-1 w-max" style={{background:"#EFEFEF"}}>APPLICATION DEVELOPMENT ANALYST</h2>
            <p style={{fontFamily:'Barlow'}} className="text-sm font-medium md:tracking-wide text-center lg:text-right">Accenture Service Pvt.Ltd | 2019 - 2021</p>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Led the team in bridging the gap between On-shore and
              off-shore, handling critical server issues.
            </li>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Performed migration activities with the upgradation of billing
              servers.
            </li>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Received ACE award for excellency and being a critical resource
              for the contribution towards major billing migrations of the
              client.
            </li>

            <h4 className="text-sm font-semibold text-slate-600 tracking-wide uppercase mt-3 md:mt-2 p-1 w-max" style={{background:"#EFEFEF"}}>APPLICATION DEVELOPMENT ASSOCIATE</h4>
            <p style={{fontFamily:'Barlow'}} className="text-sm font-medium md:tracking-wide text-center lg:text-right">Accenture Service Pvt.Ltd | 2017 – 2019</p>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Performed incident analysis and bug fix for many Telecom billing
              related issues.
            </li>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed">
              Performed performance enhancement activities of the Linux servers.
            </li>
            <li className="text-xs text-gray-600 text-left tracking-wide leading-relaxed" >
              Received APEX award for the quarter in the team and also received
              multiple client appreciations.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

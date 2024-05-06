import React from "react";
import sinag from "../assets/Projects/Sinag Website.jpg";
import htmlicon from "../assets/skills-icon/html.svg";
import cssicon from "../assets/skills-icon/css.svg";
import jsicon from "../assets/skills-icon/javascript.svg";

const Project = () => {
  return (
    <div>
      {/* Project Page */}
      <div name="project" className="relative flex justify-center h-[100vh]">
        {/* project content */}
        <div
          className="absolute h-auto flex flex-col mx-[10%] my-[40%] p-3 
        
          lg:h-auto lg:mx-[30%] lg:my-[10%]
        
        "
        >
          <div
            data-aos="flip-down"
            data-aos-duration="500"
            className="relative h-auto"
          >
            <img
              src={sinag}
              alt=""
              className="w-full border-4 border-[#303841] rounded-lg"
            />
            <h1 className="text-[#303841] mt-3 font-semibold text-xl">
              Sinag | Ecommerce Website
            </h1>
            <div className="mt-4 flex items-center">
              <h2 className="text-center font-semibold text-xl text-[#303841]">
                Built with :
              </h2>
              <div className="w-[20%] grid grid-cols-3 gap-2 ml-1">
                <img src={htmlicon} alt="" />
                <img src={cssicon} alt="" />
                <img src={jsicon} alt="" />
              </div>
            </div>
          </div>
          {/* more projects to come */}

          <div className="mt-20 w-full text-center ">
            <h1 className="font-bold text-xl text-[#303841]">
              More projects to come!{" "}
            </h1>
          </div>

          {/* end of "more projects to come" */}
        </div>
      </div>
    </div>
  );
};

export default Project;

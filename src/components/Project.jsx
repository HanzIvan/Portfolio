import React from "react";

// Image
import sinag from "../assets/Projects/Sinag Website.jpg";
import codehub from "../assets/Projects/CodeHub Project.jpg";

// Icons
import htmlicon from "../assets/skills-icon/html.svg";
import cssicon from "../assets/skills-icon/css.svg";
import jsicon from "../assets/skills-icon/javascript.svg";
import reacticon from "../assets/skills-icon/react.svg";
import tailwind from "../assets/skills-icon/tailwind-css.svg";

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
            <a href="https://sinag.vercel.app/">
              <img
                src={sinag}
                alt=""
                className="w-full border-4 border-[#303841] rounded-lg"
              />
            </a>
            <h1 className="text-[#303841] mt-3 font-semibold text-xl">
              Sinag | Ecommerce Website
            </h1>
            <div className="mt-4 w-full flex items-center">
              <h2 className="text-center font-semibold text-xl text-[#303841]">
                Built with :
              </h2>
              <div className="w-[25%] grid grid-cols-3 gap-10 sm:gap-2 sm:w-auto lg:gap-2">
                <div className="w-10 h-10">
                  <img src={htmlicon} alt="" className="w-full h-full" />
                </div>
                <div className="w-10 h-10">
                  <img src={cssicon} alt="" className="w-full h-full" />
                </div>
                <div className="w-10 h-10">
                  <img src={jsicon} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          {/* CodeHub */}

          <div
            data-aos="flip-down"
            data-aos-duration="500"
            className="relative h-auto mt-10"
          >
            <a href="https://codehub-online.vercel.app/">
              <img
                src={codehub}
                alt=""
                className="w-full border-4 border-[#303841] rounded-lg"
              />
            </a>
            <h1 className="text-[#303841] mt-3 font-semibold text-xl">
              CodeHub | Online Course for Programming
            </h1>
            <div className="mt-4 w-full flex items-center">
              <h2 className="text-center font-semibold text-xl text-[#303841]">
                Built with :
              </h2>
              <div className="ml-2 w-[25%] grid grid-cols-3 gap-10 sm:gap-2 sm:w-auto lg:gap-2">
                <div className="w-10 h-10">
                  <img src={reacticon} alt="" className="w-full h-full" />
                </div>
                <div className="w-10 h-10">
                  <img src={tailwind} alt="" className="w-full h-full" />
                </div>
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

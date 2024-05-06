import React from "react";
import Laptop from "../assets/Laptop.png";
import htmlicon from "../assets/skills-icon/html.svg";
import cssicon from "../assets/skills-icon/css.svg";
import jsicon from "../assets/skills-icon/javascript.svg";
import reacticon from "../assets/skills-icon/react.svg";
import tailwindicon from "../assets/skills-icon/tailwind-css.svg";
import cicon from "../assets/skills-icon/c++.svg";
import pythonicon from "../assets/skills-icon/python.svg";
import phpicon from "../assets/skills-icon/php.svg";
import mysqlicon from "../assets/skills-icon/mysql.svg";

const Skills = () => {
  return (
    // Main Page
    <div
      name="skills"
      className="relative flex justify-center h-[100vh] font-bold text-[#303841]"
    >
      {/* Main Content */}
      <div
        className="absolute flex flex-col justify-center items-center my-[15%] mx-[5%]
      
      sm:mx-[5%] sm:my-[30%]

      md:mx-[10%] md:my-[30%]

      lg:mx-[30%] lg:my-[5%]"
      >
        <div>
          <img data-aos="fade-up" src={Laptop} alt="" className="" />
        </div>
        <div className="mt-8 flex flex-row gap-8 w-full  ">
          {/* title */}
          <div data-aos="fade-right" className="relative w-[100%]">
            <div>
              <h1 className="text-xl sm:text-2xl text-center">
                Front-end Proficiency:
              </h1>
            </div>

            {/* Programming Languages */}
            <div className="flex justify-center items-end mt-8">
              <div className="grid grid-cols-3 gap-3 p-1">
                {/* HTML */}
                <div>
                  <img src={htmlicon} alt="" className="" />
                </div>
                <div>
                  <img src={cssicon} alt="" />
                </div>
                <div>
                  <img src={jsicon} alt="" />
                </div>
                <div>
                  <img src={reacticon} alt="" />
                </div>
                <div>
                  <img src={tailwindicon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="basic-prog w-[100%]">
            <div>
              <h1 className="text-xl sm:text-2xl text-center">
                Basic Proficiency:
              </h1>
            </div>

            {/* Programming Languages */}
            <div className="flex justify-center items-end mt-8">
              <div className="grid grid-cols-3 gap-3 p-1 place-items-center">
                {/* HTML */}
                <div>
                  <img src={cicon} alt="" />
                </div>
                <div>
                  <img src={pythonicon} alt="" />
                </div>
                <div>
                  <img src={phpicon} alt="" />
                </div>
                <div>
                  <img src={mysqlicon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

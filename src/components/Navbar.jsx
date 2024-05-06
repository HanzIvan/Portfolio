import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center fixed top-0 w-full z-10">
      <nav className="flex justify-evenly h-20 bg-[#303841] rounded-full my-[20px] mx-[30%] drop-shadow-lg">
        <ul className="flex items-center list-none font-bold text-[#FFF7F1] text-base gap-[15px] p-10 sm:gap-[80px] ">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about-page"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              PROJECT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

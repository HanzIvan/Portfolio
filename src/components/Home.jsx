import React from "react";
import profile_memoji from "../assets/Hey.png";

// Type Animation
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="relative flex justify-center w-full h-[100vh]">
      <div
        className="absolute flex flex-col justify-center items-center my-[25%] mx-[5%]
     
      sm:flex sm:flex-col sm:justify-center sm:items-center sm:mx-[10%] sm:my-[30%]
      
     
      md:flex md:flex-row md:mx-[5%] md:my-[35%] 
      
   
      lg:mx-[30%] lg:my-[15%]
      "
      >
        <div className="">
          <img
            data-aos="fade-right"
            src={profile_memoji}
            alt=""
            className="sm:w-full "
          />
        </div>
        <div
          className="relative flex flex-col justify-between items-center  
          
          sm:w-full

          md:w-[50%]
          "
        >
          <h1 className="mt-2 font-bold sm:text-2xl md:text-3xl  text-[#303841]">
            Hello! I'm
          </h1>
          <div className="sm:flex sm:items-center sm:h-full">
            <h2
              className="font-bold p-1 text-center text-6xl text-[#7D0A0A] 

            sm:text-8xl 
            
            md:h-[200px] md:m-2 md:w-full

            lg:m-5
            "
            >
              <TypeAnimation
                sequence={["Hanz Ivan", 1000]}
                wrapper="span"
                speed={25}
                style={{
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <p className="text-[15px] sm:text-[18px] font-semibold text-center text-[#303841]">
            I'm deeply passionate about front-end development, drawn to the
            creative challenge of bringing designs to life through code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

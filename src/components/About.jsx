import React from "react";
import resume from "../assets/Resume/Resume.pdf";

const About = () => {
  return (
    <div name="about-page" className="flex justify-center w-full h-[100vh]">
      <div
        data-aos="flip-down"
        name="about-content"
        className="relative flex flex-col items-center my-[25%] sm:my-[50%] sm:mx-[5%] sm:h-[50%] md:mx-[10%] lg:my-[10%] lg:mx-[30%] lg:h-auto"
      >
        <div name="about-body" className="p-8 flex flex-col text-justify ">
          <h1 className="mb-10 font-bold text-4xl text-[#7D0A0A]">About</h1>
          <p className="font-bold text-base md:text-xl text-[#303841]">
            I am a Computer Engineering graduate from FEU Institute of
            Technology, driven by a passion to design fully functional websites
            and create engaging user experiences. Continuously expanding my
            skills and knowledge, I am dedicated to delivering seamless and
            impactful front-end solutions that leave a lasting impression.
          </p>
          <p className="mt-8 font-bold text-base md:text-xl text-[#303841] ">
            In my free time, I play games and study programming on my own. I'm
            really into trying out different programming languages and tools to
            see how they work. I also like keeping up with what's new in tech.
            Learning new things is just something I naturally enjoy, whether
            it's about programming, design, or the latest tech trends.
          </p>
        </div>

        <div name="about-btn" className="w-full">
          <div className="flex justify-center gap-3 p-3">
            {/* resume button */}
            <a href={resume} download="Resume">
              <button className="w-[120px] bg-[#3A4750] text-[#FFF7F1] p-4 rounded-xl font-bold">
                Resume
              </button>
            </a>

            {/* Social Links */}
            <a href="mailto:hanzivan23@gmail.com">
              <button className="w-[120px] bg-[#3A4750] text-[#FFF7F1] p-4 rounded-xl font-bold">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

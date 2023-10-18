import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/web-portfolio.png";
import img2 from "../assets/SQR.png";
import img3 from "../assets/course.png";

const Work = () => {
  return (
    <>
      <section className="section" id="work">
        <div className="conteiner mx-auto">
          <div className="flex flex-col lg:flex-row px-60 gap-x-10">
            <div className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0">
              <div className="h2 leading-tight text-accent font-semibold">
                <h2 className="mb-3">My Projects</h2>
                <button className="btn btn-sm">View All Project</button>
              </div>
              <div className="group relative overflow-hidden border-2 w-[450px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-150 transition-all duration-300 w-[450px] h-[300px]" src={img2} alt="Course" />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <span className="text-gradient">Mobile Application</span>
                </div>
                <div className="absolute -bottom-full left-10 group-hover:bottom-12 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">SQR</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-5">
              <div className="group relative overflow-hidden border-2 w-[450px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-110 transition-all duration-300 w-[450px] h-[300px]" src={img1} alt="Course" />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <span className="text-gradient">Web Application</span>
                </div>
                <div className="absolute -bottom-full left-10 group-hover:bottom-12 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Portfolio</span>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 w-[450px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-110 transition-all duration-300 w-[450px] h-[300px]" src={img3} alt="Course" />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <span className="text-gradient">Web Application</span>
                </div>
                <div className="absolute -bottom-full left-10 group-hover:bottom-12 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Course</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/web-portfolio.png";
import img2 from "../assets/SQR.png";
import img3 from "../assets/course.png";
import img4 from "../assets/movie.png";

const Work = () => {
  return (
    <>
      <section className="section" id="work">
        <div className="conteiner mx-auto">
          <div className="h2 leading-tight text-accent font-semibold text-center">
            <h2 className="mb-3">My Projects</h2>
          </div>
          <div className="flex flex-col lg:flex-row px:0 ms-1 lg:px-60 gap-x-10">
            <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex flex-1 flex-col gap-y-5 mb-10 lg:mb-0">
              <div className="group relative overflow-hidden border-2 w-[400px] lg:w-[450px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-150 transition-all duration-300 w-[400px] lg:w-[450px] h-[270px]" src={img4} alt="Course" />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <span className="text-gradient">Web Application</span>
                </div>
                <div className="absolute -bottom-full left-10 group-hover:bottom-12 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">iMovie</span>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 w-[400px] lg:w-[450px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-150 transition-all duration-300 w-[400px] lg:w-[450px] h-[270px]" src={img2} alt="Course" />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <span className="text-gradient">Mobile Application</span>
                </div>
                <div className="absolute -bottom-full left-10 group-hover:bottom-12 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">SQR</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-5">
              <div className="group relative overflow-hidden border-2 w-[400px] lg:w-[450px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-110 transition-all duration-300 w-[400px] lg:w-[450px] h-[270px]" src={img1} alt="Course" />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <span className="text-gradient">Web Application</span>
                </div>
                <div className="absolute -bottom-full left-10 group-hover:bottom-12 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Portfolio</span>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 w-[400px] lg:w-[450px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-110 transition-all duration-300 w-[400px] lg:w-[450px] h-[270px]" src={img3} alt="Course" />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <span className="text-gradient">Web Application</span>
                </div>
                <div className="absolute -bottom-full left-10 group-hover:bottom-12 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Course</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

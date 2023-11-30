import React from "react";

import { ImLinkedin, ImGithub } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Andry from "../assets/andryariadi.png";

const Banner = () => {
  return (
    <>
      <div className="section" id="home">
        <div className="container mx-auto">
          <div className="banner flex flex-col lg:flex-row lg:items-center">
            <div className="flex-1 text-center lg:text-start font-secondary mt-8 lg:mt-0">
              <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="text-[35px] lg:text-[75px] font-bold leading-[0.8] mb-5">
                Hi! I'm <span className="text-gradient">Andry Ariadi</span>
              </motion.h1>
              <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mb-6 text-[25px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white mr-3">I am a</span>
                <TypeAnimation sequence={["Software Engineering", 2000, "Web Developer", 2000, "Frontend Developer", 2000]} speed={50} className="text-accent" wrapper="span" repeat={Infinity} />
              </motion.div>
              <motion.p variants={fadeIn("up", 0.9)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mb-3">
                Welcome to My personal website
              </motion.p>
              <motion.div variants={fadeIn("up", 1.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex justify-center lg:justify-start text-xl lg:text-3xl">
                <div>
                  <a href="https://drive.google.com/file/d/1CUjltn3u2Su4Ts_J364JqNpdDnSH_2XA/view?usp=sharing" target="_blank">
                    <button className="btn btn-sm lg:btn-lg mr-5">Download CV</button>
                  </a>
                </div>
                <div className="flex items-center gap-x-5">
                  <a href="https://www.linkedin.com/in/andry-ariadi/" target="_blank">
                    <ImLinkedin />
                  </a>
                  <a href="https://github.com/andryariadi" target="_blank">
                    <ImGithub />
                  </a>
                  <a href="https://www.instagram.com/andry_ariadi/" target="_blank">
                    <PiInstagramLogoFill />
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView={"show"} className="mx-auto lg:mx-0 mt-5 lg:mt-0">
              <img src={Andry} alt="Andry" width={300} height={300} className="img-banner brightness-75 contrast-90 hue-rotate-15 bg-gradient-to-r from-purple-700 to-sky-600" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

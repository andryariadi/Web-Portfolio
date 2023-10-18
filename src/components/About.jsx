import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Robot from "../assets/robot.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <sectin className="section" id="about" ref={ref}>
        <div className="container mx-auto">
          <div className="about flex flex-col lg:flex-row">
            <div className="">
              <img className="img-about" src={Robot} alt="Robot" width={4000} height={4000} />
            </div>
            <div>
              <h2 className="h2 text-accent font-semibold">About Me</h2>
              <p className="mb-5">
                I graduated from the Bachelor of Science in Mechanical Engineering program at Malang State University. I am also a full-stack developer with a strong interest in working in IT. As per the position I have applied for, I
                possess the skills to web applications and mobile applications along with their respective tech stacks, such as React JS, Redux, CSS, Bootstrap, Tailwind, Apollo Client, Node JS, PostgreSQL, Redis, and MongoDB. In the
                professional world, I am known for my discipline, attention to detail, ability to complete tasks on time, and readiness to work under pressure.
              </p>
              <div className="flex gap-x-6 lg:gap-x-10 mb-5">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? <CountUp start={0} end={6} duration={3} /> : null}</div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Software Engineering <br /> Certificate
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? <CountUp start={0} end={7} duration={3} /> : null}</div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects <br /> Completed
                  </div>
                </div>
              </div>
              <div className="flex gap-x-5 items-center">
                <button className="btn btn-sm ">Contact Me</button>
                <a href="https://drive.google.com/drive/folders/1y-uHnQ4t29SrZTrN3Wva_f09qUEouBnX?usp=share_link" target="_blank" className="text-gradient btn-link">
                  My Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </sectin>
    </>
  );
};

export default About;

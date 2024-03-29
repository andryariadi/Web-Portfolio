import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Robot from "../assets/robot.png";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <sectin className="section" id="about" ref={ref}>
        <div className="container mx-auto">
          <div className="about flex flex-col lg:flex-row gap-y-10 lg:gap-y-0">
            <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
              <img className="img-about" src={Robot} alt="Robot" width={4000} height={4000} />
            </motion.div>
            <motion.div variants={fadeIn("left", 0.55)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
              <h2 className="h2 text-accent font-semibold">About Me</h2>
              <p className="mb-5">
                I graduated from the Bachelor of Science in Mechanical Engineering program at Malang State University. I am also a full-stack developer with a strong interest in working in IT. As per the position I have applied for,{" "}
                <span className="text-accent font-bold">
                  I possess the skills to web applications and mobile applications along with their respective tech stacks, such as React Js, Next Js, Next Auth, Clerk, Redux, CSS, Bootstrap, Tailwind, Apollo Client, Node JS, Express JS,
                  PostgreSQL, MongoDB, GraphQL and Redis.
                </span>{" "}
                In the professional world, I am known for my discipline, attention to detail, ability to complete tasks on time, and readiness to work under pressure.
              </p>
              <div className="flex gap-x-6 lg:gap-x-10 mb-5">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">{inView ? <CountUp start={0} end={13} duration={3} /> : null}</div>
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
                <Link activeClass="active" smooth={true} spy={true} to="contact">
                  <button className="btn btn-sm ">Contact Me</button>
                </Link>
                <a href="https://drive.google.com/drive/folders/1y-uHnQ4t29SrZTrN3Wva_f09qUEouBnX?usp=share_link" target="_blank" className="text-gradient btn-link">
                  My Certificate
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </sectin>
    </>
  );
};

export default About;

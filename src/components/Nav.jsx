import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 animate__animated animate__fadeInUp">
        <div className="container mx-auto">
          <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            <Link activeClass="active" smooth={true} spy={true} offset={-200} to="home" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
              <BiHomeAlt />
            </Link>
            <Link activeClass="active" smooth={true} spy={true} to="about" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
              <BiUser />
            </Link>
            <Link activeClass="active" smooth={true} spy={true} to="work" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
              <BsBriefcase />
            </Link>
            <Link activeClass="active" smooth={true} spy={true} to="contact" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
              <BsChatSquareText />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

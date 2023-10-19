import React from "react";

import Andry from "../assets/andry-ariadi.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className="py-8 animate__animated animate__fadeInDown">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link activeClass="active" smooth={true} spy={true} to="header">
              <img src={Andry} alt="Andry" width={100} height={100} />
            </Link>
            <Link activeClass="active" smooth={true} spy={true} to="contact">
              <button className="btn btn-sm">Work with Me</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

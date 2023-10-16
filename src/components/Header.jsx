import React from "react";

import Andry from "../assets/andry-ariadi.png";

const Header = () => {
  return (
    <>
      <header className="py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="#">
              <img src={Andry} alt="Andry" width={150} height={200} />
            </a>
            <a href="#">
              <button className="btn btn-sm">Work with Me</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { logoLight } from "../../assets/images";

const Header = () => {
  return (
    <div className="w-full h-20 border sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center px-4">
        <div>
          <img className="w-60" src={logoLight} alt="logoLight" />
        </div>
        <div>
          <ul className="text-sm uppercase font-bold gap-12 flex items-center">
            <li className="text-primeColor tracking-wider hover:text-designColor duration-300 cursor-pointer">
              Home
            </li>
            <li className="text-primeColor tracking-wider hover:text-designColor duration-300 cursor-pointer">
              About
            </li>
            <li className="text-primeColor tracking-wider hover:text-designColor duration-300 cursor-pointer">
              Docs
            </li>
            <li className="text-primeColor tracking-wider hover:text-designColor duration-300 cursor-pointer">
              Blog
            </li>
            <a
              href="https://www.noormohammad.live/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="text-primeColor tracking-wider hover:text-designColor duration-300 cursor-pointer">
                Hire Me
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

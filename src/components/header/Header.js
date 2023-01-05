import React, { useEffect, useState } from "react";
import { logoLight } from "../../assets/images";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 735) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);
  return (
    <div className="w-full h-20 border sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="flex md:hidden flex-col gap-1 cursor-pointer"
          >
            <span className="w-8 h-1 bg-primeColor inline-block"></span>
            <span className="w-7 h-1 bg-primeColor inline-block"></span>
            <span className="w-6 h-1 bg-primeColor inline-block"></span>
          </div>
          <div>
            <img className="w-60" src={logoLight} alt="logoLight" />
          </div>
        </div>
        {showMenu && (
          <div>
            <ul className="absolute top-[78px] left-0 h-screen md:h-auto bg-white md:static w-96 md:w-auto text-sm uppercase font-bold gap-12 flex flex-col md:flex-row items-center">
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
        )}
      </div>
    </div>
  );
};

export default Header;

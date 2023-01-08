import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { logoLight } from "../../assets/images";

const Header = () => {
  useEffect(() => {
    const menuBar = document.querySelector(".menuBar");
    const menuOpenBtn = document.querySelector(".menuOpenBtn");
    const menuCloseBtn = document.querySelector(".menuCloseBtn");
    menuOpenBtn.addEventListener("click", () => {
      menuBar.style.transform = "translateX(0)";
      menuBar.style.opacity = "100%";
      menuBar.style.transition = "ease-in-out .5s";
    });
    menuCloseBtn.addEventListener("click", () => {
      menuBar.style.transform = "translateX(-100%)";
      menuBar.style.opacity = "0";
    });
    menuBar.addEventListener("transform", () => {
      menuBar.style.transition = "ease-in-out .5s";
    });
    if (menuBar.style.transform === "translateX(0)") {
      console.log("done");
    }
  }, []);

  return (
    <div className="w-full h-20 border sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <div className="flex mdl:hidden flex-col gap-[5px] cursor-pointer group menuOpenBtn">
            <span className="w-8 h-1 bg-gray-500 rounded-lg group-hover:bg-designColor duration-300 inline-block"></span>
            <span className="w-6 h-1 bg-gray-500 rounded-lg group-hover:bg-designColor duration-300 inline-block"></span>
            <span className="w-8 h-1 bg-gray-500 rounded-lg group-hover:bg-designColor duration-300 inline-block"></span>
          </div>
          <div>
            <img className="md:w-60 min-w-32" src={logoLight} alt="logoLight" />
          </div>
        </div>

        <div className="w-full">
          <ul className="hidden text-sm uppercase font-bold gap-12 mdl:flex justify-end">
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
      <div>
        <div className="absolute top-0 -left-1 w-[80%] mdl:hidden bg-white h-screen -translate-x-[100%] opacity-0 menuBar">
          <div className="w-full h-full relative">
            <div className="p-10 flex flex-col gap-8">
              <img className="w-52 -ml-2" src={logoLight} alt="logoLight" />
              <ul className="text-sm uppercase font-bold gap-5 flex flex-col">
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
            <div className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-designColor duration-300 cursor-pointer menuCloseBtn">
              <IoMdClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

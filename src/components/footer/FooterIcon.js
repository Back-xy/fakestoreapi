import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const FooterIcon = () => {
  return (
    <div className="flex  items-center gap-4 text-xl">
      <span className="w-10 h-10 rounded-full bg-[#fff3] flex justify-center items-center hover:bg-designColor duration-300 cursor-pointer hover:text-black">
        <FaGithub />
      </span>
      <span className="w-10 h-10 rounded-full bg-[#fff3] flex justify-center items-center hover:bg-designColor duration-300 cursor-pointer hover:text-black">
        <SiNextdotjs />
      </span>
      <span className="w-10 h-10 rounded-full bg-[#fff3] flex justify-center items-center hover:bg-designColor duration-300 cursor-pointer hover:text-black">
        <FaFacebook />
      </span>
      <span className="w-10 h-10 rounded-full bg-[#fff3] flex justify-center items-center hover:bg-designColor duration-300 cursor-pointer hover:text-black">
        <FaTwitter />
      </span>
      <span className="w-10 h-10 rounded-full bg-[#fff3] flex justify-center items-center hover:bg-designColor duration-300 cursor-pointer hover:text-black">
        <FaYoutube />
      </span>
      <span className="w-10 h-10 rounded-full bg-[#fff3] flex justify-center items-center hover:bg-designColor duration-300 cursor-pointer hover:text-black">
        <FaWhatsapp />
      </span>
    </div>
  );
};

export default FooterIcon;

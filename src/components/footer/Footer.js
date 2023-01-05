import React from "react";
import { logoDark } from "../../assets/images";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-200 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-4">
        <div>
          <img className="w-60" src={logoDark} alt="logoDark" />
        </div>
        <div>
          <FooterIcon />
        </div>
        <div>
          <p className="text-sm text-gray-500 tracking-wider">
            © Copyright 2023 by Noor_Mohammad. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { ImGithub } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";
import { aboutIntro } from "../../assets/images";
import AboutUsBtn from "../buttons/AboutUsBtn";

const AboutUs = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-5xl mx-auto flex">
        <div className="flex flex-col gap-10 justify-end px-10">
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl font-titleFont font-bold tracking-wide text-black">
              Fake Store API
            </h1>
            <p className="text-sm w-96">
              Fake store rest API for your e-commerce or shopping website
              prototype
            </p>
          </div>
          <div className="flex items-center gap-4">
            <AboutUsBtn icon={<ImGithub />} title="View on Github" />
            <AboutUsBtn icon={<FaBookReader />} title="Read Docs" />
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <img className="w-[600px]" src={aboutIntro} alt="aboutIntro" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

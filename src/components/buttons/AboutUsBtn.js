import React from "react";

const AboutUsBtn = ({ icon, title }) => {
  return (
    <button className="flex justify-between w-[180px] h-[60px] rounded-md hover:bg-designColor hover:text-primeColor font-semibold duration-300 cursor-pointer items-center px-4 bg-primeColor text-white text-base">
      {title} <span>{icon}</span>
    </button>
  );
};

export default AboutUsBtn;

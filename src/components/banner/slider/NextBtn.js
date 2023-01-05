import React from "react";
import { FaChevronRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-20 left-32 bg-black hover:bg-gray-300 hover:text-black duration-300 w-10 h-10 text-white text-xl flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

export default SampleNextArrow;

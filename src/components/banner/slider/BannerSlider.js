import React from "react";
import Slider from "react-slick";
import {
  sliderOne,
  sliderTwo,
  sliderThree,
  demoImg,
} from "../../../assets/images";
import SampleNextArrow from "./NextBtn";
import SamplePrevArrow from "./PrevBtn";
const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div className="w-full h-auto relative">
            <img
              className="w-full h-[700px] object-fill"
              src={sliderOne}
              alt="sliderOne"
            />
            <div className="w-96 z-50 absolute top-[30%] left-[37%]">
              <img src={demoImg} alt="demoImg" />
              <h1 className="text-white text-sm uppercase font-semibold text-center tracking-[4px] mt-1">
                Enjoy the Design & Possibilities
              </h1>
            </div>
            <div className="w-full h-[700px] bg-wrapColor absolute top-0 left-0"></div>
          </div>
          <div className="w-full h-auto relative">
            <img
              className="w-full h-[700px] object-fill"
              src={sliderTwo}
              alt="sliderTwo"
            />
            <div className="w-96 z-50 absolute top-[30%] left-[37%]">
              <img src={demoImg} alt="demoImg" />
              <h1 className="text-white text-sm uppercase font-semibold text-center tracking-[4px] mt-1">
                Make the most out of it
              </h1>
            </div>
            <div className="w-full h-[700px] bg-wrapColor absolute top-0 left-0"></div>
          </div>
          <div className="w-full h-auto relative">
            <img
              className="w-full h-[700px] object-fill"
              src={sliderThree}
              alt="sliderThree"
            />
            <div className="w-96 z-50 absolute top-[30%] left-[37%]">
              <img src={demoImg} alt="demoImg" />
              <h1 className="text-white text-sm uppercase font-semibold text-center tracking-[4px] mt-1">
                no limit to code in nodejs
              </h1>
            </div>
            <div className="w-full h-[700px] bg-wrapColor absolute top-0 left-0"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;

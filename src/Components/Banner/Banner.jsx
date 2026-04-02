import React from "react";
import BannerIMG from "../../assets/maisha-haque.jpg";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div id="about" className="max-w-300 mx-auto p-4 flex flex-col-reverse md:flex-row justify-between items-center mt-4 md:mt-15 text-center md:text-left">
      <div className="space-y-5 fade-in duration-700">
        <h1 className="text-4xl font-bold">
          Hello, I'm <span className="text-blue-600">Maisha</span>
        </h1>
        <p className="text-gray-500 text-md max-w-100">
          I am a BBA graduate from North South University, currently advancing
          my expertise in Management Information Systems (MIS) at University of
          Dhaka. Alongside my academic journey, I work as a teacher, where I
          have the privilege of shaping young minds and inspiring future
          generations. Passionate about the intersection of education and
          technology, I am driven by continuous growth, meaningful impact, and
          the pursuit of excellence in everything I do.
        </p>
      </div>
      <div className="mb-5">
        <img className="max-w-70 rounded-xl transform hover:scale-110 duration-500 cursor-pointer" src={BannerIMG} alt="" />
      </div>
    </div>
  );
};

export default Banner;

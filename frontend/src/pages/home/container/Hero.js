import React from "react";
import { images } from "../../../constants";
import { IoIosSearch } from "react-icons/io";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className=" font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className=" text-dark-light mt-4 text-center md:text-xl lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex flex-col gap-y-2 mt-10 relative">
          <div className="relative w-full">
            <IoIosSearch className=" absolute left-3 top-7 -translate-y-1/2 w-6 h-6" />
            <input
              type="text"
              className=" font-bold  text-dark-soft rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none md:py-4 shadow-xl border "
              placeholder="Search article"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2  md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7 items-center">
          <span className=" text-dark-light font-semibold italic ">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 ">
            <li className=" rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className=" rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User
            </li>
            <li className=" rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              UI
            </li>
          </ul>
        </div>
      </div>
      <div className=" hidden lg:block lg:1/2">
        <img src={images.hero} alt="banner" className=" w-full" />
      </div>
    </section>
  );
};

export default Hero;

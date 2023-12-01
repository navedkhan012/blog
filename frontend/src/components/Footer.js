import React from "react";
import images from "../constants/images";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <section className="bg-dark-hard">
      <footer className=" container mx-auto grid  grid-cols-10 px-5 py-10 gap-x-5 gap-y-10 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className=" col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg ">Product</h3>
          <ul className=" text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Feature</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className=" col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className=" text-dark-light font-bold md:text-lg">Services</h3>
          <ul className=" text-[#959EAD] text-sm mt-5 space-y-4 md:text-base ">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className=" col-span-5 md:col-span-4 lg:col-span-2 md:col-start-5 lg:col-start-auto">
          <h3 className=" text-dark-light font-bold md:text-lg">Company</h3>
          <ul className=" text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className=" col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className=" text-dark-light font-bold md:text-lg">More</h3>
          <ul className=" text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Feature</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>

        <div className=" col-span-10 md:order-first md:col-span-4">
          <img src={images.whiteLogo} alt="logo" className="mx-auto md:mx-0" />
          <p className=" text-center text-sm text-dark-light mt-4 md:text-left md:text-base">
            Build a modern and creative website with crealand
          </p>
          <ul className=" flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <FiTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <SlSocialYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <TbBrandTelegram className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12">
          <div className=" bg-primary text-white rounded-full p-3">
            <FaHeart className="w-7 h-auto" />
          </div>
          <p className=" text-dark-light italic font-bold">
            Copyright © 2023. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

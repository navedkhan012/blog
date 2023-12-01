import React from "react";
import { images } from "../../../constants";

/**
 * @author
 * @function CTA
 **/

const CTA = (props) => {
  return (
    <>
      <svg
        className="w-full  h-auto max-h-40  translate-y-[1px]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1152 263"
        fill="none"
      >
        <path
          id="Wave"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1656 262.5H-504V0C-144 80 216 120 576 120C936 120 1296 80 1656 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
      <section className=" relative bg-dark-hard px-5">
        <div className="container  flex mx-auto lg:place-items-center">
          <div className="col-span-12   w-1/2 lg:col-span-6">
            <h2 className=" text-white font-roboto font-bold text-2xl lg:text-left">
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
              />
              <button className="px-4 py-3  rounded-lg w-full bg-primary text-white  font-bold md:w-fit md:whitespace-nowrap">
                Get started
              </button>
            </div>
            <p className=" text-dark-light text-sm leading-7 mt-6 italic  md:text-center md:text-base lg:text-left">
              <span className="font-bold text-white md:not-italic md:font-normal md:text-dark-light">
                Get a response tomorrow
              </span>
              if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 w-1/2 hidden mb-[10px] md:block md:order-first lg:order-last">
            <img src={images.facebookCard} alt="fb" className=" w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;

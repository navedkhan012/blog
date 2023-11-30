import React from "react";
import { images } from "../constants";
import { FaCheck } from "react-icons/fa6";

/**
 * @author
 * @function Article
 **/

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  overflow-hidden ${className}`}
    >
      <img
        src={images.post1}
        alt="post 1"
        className="w-full object-cover object-center h-auto"
      />
      <div className="p-5">
        <h2 className="font-roboto  font-bold text-xl text-dark-soft">
          Choosing The Best Photo printer
        </h2>
        <p className=" text-dark-light mt-3 text-sm">
          A curated list of box shadows for TailwindCSS. Available
        </p>
        <div className="flex justify-between flex-nowrap mt-6 items-center">
          <div className="flex items-center gap-x-2">
            <img src={images.postProfileImage} alt="profile" />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm">
                Naved khan
              </h4>
              <div className="flex items-center gap-x-2 mt-1">
                <span className="bg-[#6fd4aa] w-fit  bg-opacity-20 p-1 rounded-full">
                  <FaCheck className="w-3 h-3  text-[#6fd4aa]" />
                </span>
                <span className=" italic text-dark-light text-xs">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

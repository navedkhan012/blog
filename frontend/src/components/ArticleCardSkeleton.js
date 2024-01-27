import React from "react";

/**
 * @author
 * @function ArticleCardSkeleton.js
 **/

const ArticleCardSkeleton = ({ className }) => {
  return (
    <div
      className={`rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] overflow-hidden ${className} hover:scale-105 transition-all animate-pluse`}
    >
      {/* image */}
      <div className="w-full aspect-video bg-slate-300"></div>

      <div className="p-5">
        {/* title */}
        <div className="w-56 h-2 mt-4 bg-slate-300 rounded-lg"></div>
        {/* caption */}
        <div className="w-24 h-2 mt-4 bg-slate-300 rounded-lg"></div>

        <div className="flex justify-between flex-nowrap mt-6 items-center">
          <div className="flex items-center gap-x-2">
            {/* profile image */}
            <div className="w-9 h-9 mt-4 bg-slate-300 rounded-lg"></div>
            <div className="flex flex-col">
              {/* user name */}
              <div className="w-24 h-2 mt-4 bg-slate-300 rounded-lg"></div>
              {/* verify status  */}
              <div className="w-16 h-2 mt-4 bg-slate-300 rounded-lg"></div>
            </div>
          </div>
          {/* date */}
          <div className="w-10 h-2 mt-4 bg-slate-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;

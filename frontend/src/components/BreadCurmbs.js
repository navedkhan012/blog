import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function breadcrumb
 **/

const Breadcrumbs = ({ data }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap gap-x-5">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="text-black opacity-50 text-xs md:text-sm font-roboto"
          >
            <Link to={item.link}>{item.name}</Link>
            {index !== data.length - 1 && <span className="ml-4">/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

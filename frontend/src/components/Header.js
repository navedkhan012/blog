import React, { useState } from "react";
import { images } from "../constants";
import { CiMenuFries, CiSquareRemove } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";

/**
 * @author
 * @function Header
 **/

const navItemInfo = [
  { name: "Home", type: "link" },
  { name: "Article", type: "link" },
  { name: "Page", type: "dropdown", items: ["About", "Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  return (
    <li className=" relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2 group-hover:text-green-500">
            {item.name}
          </a>

          <span
            className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0  
    group-hover:right-[90%] opacity-0 group-hover:opacity-100"
          >
            /
          </span>
        </>
      ) : (
        <>
          <a
            href="/"
            className="px-4 py-2 group-hover:text-green-500 flex gap-x-1 items-center"
          >
            <span>{item.name}</span>
            <GoChevronDown />
          </a>

          <div className=" hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max">
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => {
                return (
                  <a
                    key={index}
                    href="/"
                    className=" hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:bg-dark-soft"
                  >
                    {page}
                  </a>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = (props) => {
  const [navIsvisible, setNavIsvisible] = useState(false);

  const navVisiblityHandler = () => {
    setNavIsvisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className=" sticky left-0 right-0 top-0 z-50 bg-white shadow-lg">
      <header className=" container mx-auto px-5 flex  justify-between py-4 items-center">
        <div>
          <img className="w-16" src={images.logo} alt="logo" />
        </div>
        <div className="z-50 lg:hidden block">
          {navIsvisible ? (
            <CiSquareRemove className="w-6 h-6" onClick={navVisiblityHandler} />
          ) : (
            <CiMenuFries className="w-6 h-6" onClick={navVisiblityHandler} />
          )}
        </div>
        <div
          className={`
          ${
            navIsvisible
              ? "right-0 w-full flex-col bg-red-200"
              : " -right-full "
          }
           transition-all duration-300
          flex  gap-8 items-center fixed top-0 bottom-0 lg:static  justify-center lg:justify-end`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 font-semibol items-center">
            {navItemInfo.map((item, index) => {
              return <NavItem key={item + index} item={item} />;
            })}
          </ul>
          <button className="border-2 border-blue-500 rounded-full px-6 py-2 text-blue-500 font-semibold hover:bg-blue-500  hover:text-white transition-all duration-100">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;

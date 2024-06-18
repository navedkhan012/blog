import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../../constants";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  AiFillAccountBook,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import NavItems from "./NavItems";
import NavItemsCollapse from "./NavItemsCollapse";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeNavName, setActiveNavName] = useState("dashboard");

  const windowSize = useWindowSize();
  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMenuActive(true);
    } else {
      setIsMenuActive(false);
    }
  }, [windowSize.width]);

  const MENU_ITEMS = [
    {
      title: "Dashboard",
      link: "/admin",
      icon: <AiFillAccountBook className="text-xl" />,
      name: "dashboard",
      type: "link",
    },
    {
      title: "Comments",
      link: "/admin/comments",
      icon: <AiFillAccountBook className="text-xl" />,
      name: "comments",
      type: "link",
    },
    {
      title: "Posts",
      content: [
        { title: "New", link: "/admin/posts/new" },
        { title: "Manage", link: "/admin/posts/manage" },
      ],
      icon: <AiFillAccountBook className="text-xl" />,
      name: "posts",
      type: "collapse",
    },
  ];
  return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
      <Link to="/" className="lg:hidden">
        <img src={images.logo} alt="logo" className="w-16 lg:hidden" />
      </Link>
      <div className=" cursor-pointer lg:hidden">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>
      {/* sidebar */}
      {!isMenuActive && (
        <div className="fixed inset-0 lg:static lg:h-full lg:w-full">
          {/* underlay */}
          <div
            className=" fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleMenuHandler}
          ></div>
          {/* sidebar */}
          <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-white p-4 lg:static lg:h-full lg:w-full lg:p-6">
            <Link>
              <img src={images.logo} alt="logo" className="w-16" />
            </Link>
            <h4 className="mt-10 font-bold text-[#c7c7c7]">Main menu</h4>
            {/* menu items */}
            <div className="mt-6 flex flex-col gap-y-2">
              {MENU_ITEMS.map((item) => {
                return item.type === "link" ? (
                  <NavItems
                    link={item.link}
                    title={item.title}
                    icon={item.icon}
                    name={item.name}
                    activeNavName={activeNavName}
                    setActiveNavName={setActiveNavName}
                  />
                ) : (
                  <NavItemsCollapse
                    content={item.content}
                    title={item.title}
                    icon={item.icon}
                    name={item.name}
                    activeNavName={activeNavName}
                    setActiveNavName={setActiveNavName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

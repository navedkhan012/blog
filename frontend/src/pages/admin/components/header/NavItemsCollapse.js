import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function NavItemsCollapse
 **/

const NavItemsCollapse = ({
  content,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  console.log("all", {
    content,
    title,
    icon,
    name,
    activeNavName,
    setActiveNavName,
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (activeNavName !== name) {
      setIsChecked(false);
    }
  }, [name, activeNavName]);
  return (
    <div className="collapse collapse-arrow bg-base-200 min-h-0 rounded-none py-2">
      <input
        type="checkbox"
        className="min-h-0 py-0"
        checked={name === activeNavName}
        onClick={() => {
          setActiveNavName(name);
          setIsChecked(!isChecked);
        }}
      />
      <div
        className={`collapse-title font-medium min-h-0 py-0 pl-0 flex  items-center gap-x-2 text-lg ${
          name === activeNavName
            ? " font-bold text-primary"
            : " font-semibold text-[#5a5a5a]"
        }`}
      >
        {icon}
        {title}
      </div>
      <div className="collapse-content">
        <div className="mt-2 flex flex-col gap-y-2">
          {content.map((item) => {
            return <Link to={item.link}>{item.title}</Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavItemsCollapse;

import { useState } from "react";
import logo from "../assets/logo/logo1.svg";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isSelector, setIsSelector] = useState(true);

  const navOptions = [
    { id: 1, path: "/", name: "00 HOME" },
    { id: 2, path: "/Destination", name: "01 DESTINATION" },
    { id: 3, path: "/Crew", name: "02 CREW" },
    { id: 4, path: "/Technology", name: "03 TECHNOLOGY" },
  ];

  return (
    <div className="flex justify-between items-center gap-2">
      <figure>
        <img src={logo} className="size-full" />
      </figure>
      <hr className="border-1 border-gray-500 w-1/2" />
      <div className="flex gap-16 w-3/4 py-1 justify-center text-white bg-blue-50/5 backdrop-blur-3xl">
        {navOptions.map((option) => (
          <div
            key={option.id}
            className="relative"
            onMouseEnter={() => setIsSelector(option.id)}
            onMouseLeave={() => setIsSelector(null)}
          >
            <NavLink
              to={option.path}
              className={({ isActive }) =>
                `${isActive ? "text-white" : "hover:text-white"}`
              }
            >
              <div className="flex items-center py-10">{option.name}</div>
            </NavLink>
            {isSelector === option.id &&(
              <div className="absolute left-0 right-0 h-1 bg-white rounded-t-md animate-pulse-fast" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

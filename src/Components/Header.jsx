import { useState } from "react";
import logo from "../assets/logo/logo1.svg";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isSelector, setIsSelector] = useState(true);

  const navOptions = [
    { id: "01", path: "/", name: "HOME" },
    { id: "02", path: "/Destination", name: "DESTINATION" },
    { id: "03", path: "/Crew", name: "CREW" },
    { id: "04", path: "/Technology", name: "TECHNOLOGY" },
  ];

  return (
    <div className="flex justify-between items-center gap-2">
      <figure>
        <img src={logo} className="size-full" />
      </figure>
      <hr className="border-1 border-gray-500 w-1/2" />
      <div className="flex gap-16 w-3/4 py-1 justify-center text-white bg-blue-50/5 backdrop-blur-3xl">
        {navOptions.map((option) => {
          const isActive = location.pathname === option.path;

          return (
            <div
              key={option.id}
              className="relative"
              onMouseEnter={() => setIsSelector(option.id)}
              onMouseLeave={() => setIsSelector(null)}
            >
              {/* Selector fijo para opción activa */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-t-md z-10"></div>
              )}

              {/* Selector fijo para hover */}
              {isSelector === option.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-50/40 rounded-t-md opacity-70 animate-pulse-fast z-20"></div>
              )}

              <NavLink
                to={option.path}
                className={({ isActive }) =>
                  `block py-10 font-barlow-condensed font-normal tracking-[2.7px] ${
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white transition-colors"
                  }`
                }
              >
                <div className="flex items-center">
                  <span className="font-bold mr-2">{option.id}</span>
                  {option.name}
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import logo from "../assets/logo/logo1.svg";
import { Link, NavLink } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isSelector, setIsSelector] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions = [
    { id: "01", path: "/", name: "HOME" },
    { id: "02", path: "/Destination", name: "DESTINATION" },
    { id: "03", path: "/Crew", name: "CREW" },
    { id: "04", path: "/Technology", name: "TECHNOLOGY" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center gap-2">
      <figure>
        <img src={logo} className="size-full max-lg:size-10" />
      </figure>
      <hr className="border-1 border-gray-500 w-1/2 max-lg:hidden" />

      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú de navegación"
      >
        {isMenuOpen ? <FiX className="z-40" size={24} /> : <FiMenu className="z-40" size={24} />}
      </button>

      <div className="flex gap-16 w-3/4 py-1 justify-center text-white opacity-90 backdrop-blur-3xl max-lg:hidden">
        {navOptions.map((option) => {
          const isActive = location.pathname === option.path;

          return (
            <div
              key={option.id}
              className="relative"
              onMouseEnter={() => setIsSelector(option.id)}
              onMouseLeave={() => setIsSelector(null)}
            >
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-t-md z-10"></div>
              )}

              {isSelector === option.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-50/40 rounded-t-md opacity-70 animate-pulse-fast z-20"></div>
              )}

              <NavLink
                to={option.path}
                className={({ isActive }) =>
                  `block py-10 font-barlow-condensed font-normal tracking-[2.7px] ${
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-400 hover:text-white transition-colors"
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

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950/10 backdrop-blur-3xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start pt-20 pl-8 space-y-8">
          {navOptions.map((option) => {
            const isActive = location.pathname === option.path;

            return (
              <div
                key={option.id}
                className="relative w-full"
                onClick={handleNavClick}
              >
                {isActive && (
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-r-md z-10"></div>
                )}

                <NavLink
                  to={option.path}
                  className={({ isActive }) =>
                    `block py-2 font-barlow-condensed font-normal tracking-[2.7px] text-lg ${
                      isActive
                        ? "text-white font-medium"
                        : "text-gray-400 hover:text-white transition-colors"
                    }`
                  }
                >
                  <div className="flex items-center">
                    <span className="font-bold mr-4">{option.id}</span>
                    {option.name}
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;

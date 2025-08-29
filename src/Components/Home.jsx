import React from "react";
import Header from "./Header";
import "../assets/css/estilo.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <header className="min-h-screen bg-[url('./assets/img/home/home_desktop.jpg')] object-contain bg-cover bg-center pl-10 pt-10 max-lg:bg-[url('./assets/img/home/home_tablet.jpg')] ">
      <Header />

      <div className="flex w-full justify-around h-4/5 items-center max-lg:flex-col">
        <div className="text-white flex flex-col gap-8 w-1/3 max-lg:w-1/2 items-center py-10 max-sm:w-4/5">
          <h2 className="text-2xl max-sm:text-xl">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="text-9xl max-sm:text-7xl">SPACE</h1>
          <p className="max-lg:text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-72 h-72 flex items-center justify-center">
          <button className="button flex items-center justify-center">
            <Link
              to="/Destination"
              className="bg-white text-3xl w-52 h-52 rounded-full flex justify-center items-center max-lg:h-44 max-lg:w-44 max-lg:text-xl"
            >
              EXPLORE
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Home;

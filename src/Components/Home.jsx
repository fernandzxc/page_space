import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="bg-[url('./assets/img/home_desktop.jpg')] object-contain bg-cover bg-center h-screen pl-10 pt-10">
      <Header />

      <div className="flex w-full justify-around h-4/5 items-center ">
        <div className="text-white flex flex-col gap-8 w-1/3">
          <h2 className="text-2xl">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="text-9xl">SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="bg-white text-3xl w-52 h-52 rounded-full items-start">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Home;

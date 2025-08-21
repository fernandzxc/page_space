import React from "react";
import Header from "./Header";
import launch from "../assets/img/technology/image-launch-vehicle-landscape.jpg";
import capsule from "../assets/img/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/img/technology/image-spaceport-portrait.jpg";
import europa from "../assets/img/image-europa.png";

const Technology = () => {
  return (
    <div className='bg-[url("./assets/img/technology/technology_desktop.jpg")] object-contain bg-cover bg-center h-dvh pl-10 pt-10 overflow-hidden'>
      <Header />

      <div className="pt-10 px-14 text-white">
        <h1 className="text-2xl pb-6">
          <span className="text-gray-500">03 </span>SPACE LAUNCH 101
        </h1>
        <section className="flex gap-3">
          <div className="flex gap-10 w-[55%]">
            <div className="flex flex-col text-3xl w-20 h-screen gap-10">
              <button className="w-20 border-gray-500 border-2 rounded-full h-20 hover:bg-gray-500">
                1
              </button>
              <button className="w-20 border-gray-500 border-2 rounded-full h-20 hover:bg-gray-500">
                2
              </button>
              <button className="w-20 border-gray-500 border-2 rounded-full h-20 hover:bg-gray-500">
                3
              </button>
            </div>

            <div className="text-white flex flex-col gap-4 w-[70%]">
              <h2 className="text-gray-500 text-xl">THE TERMINOLOGY...</h2>
              <h1 className="text-6xl">LAUNCH VEHICLE</h1>
              <p className="text-xl pt-4">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>
          <figure className="w-2/5 left-0 flex">
            <img src={launch} className="w-full object-fill"/>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Technology;

import React, { useState } from "react";
import Header from "./Header";
import launch from "../assets/img/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/img/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/img/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  const [selectTechnology, setSelectTechnology] = useState("launch");

  const Technology = {
    launch: {
      name: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: launch,
      option: "1",
    },
    capsule: {
      name: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: capsule,
      option: "2",
    },
    spaceport: {
      name: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: spaceport,
      option: "3",
    },
  };

  const corrent = Technology[selectTechnology];

  return (
    <div className='bg-[url("./assets/img/technology/technology_desktop.jpg")] object-contain bg-cover bg-center h-screen pl-10 pt-10 overflow-hidden'>
      <Header />

      <div className="pt-10 pl-14 text-white">
        <h1 className="text-2xl pb-6">
          <span className="text-gray-500">03 </span>SPACE LAUNCH 101
        </h1>
        <section className="flex gap-3">
          <div className="flex gap-10 w-[55%]">
            <div className="flex flex-col text-3xl w-20 h-screen gap-10">
              {Object.keys(Technology).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectTechnology(key)}
                  className={`w-20 border-gray-500 border-2 rounded-full h-20 ${
                    selectTechnology === key ? 'bg-white text-black' : 'hover:bg-gray-500'
                  }`}
                >
                  {Technology[key].option}
                </button>
              ))}
            </div>

            <div className="text-white flex flex-col gap-4 w-[70%]">
              <h2 className="text-gray-500 text-xl">THE TERMINOLOGY...</h2>
              <h1 className="text-6xl">{corrent.name}</h1>
              <p className="text-xl pt-4">{corrent.description}</p>
            </div>
          </div>
          <figure className="w-2/5 flex ">
            <img src={corrent.image} className="w-[60%] h-[60%] object-cover object-left"/>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Technology;

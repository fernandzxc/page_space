import React from "react";
import { useState } from "react";
import Header from "./Header";
import douglas from "../assets/img/crew/image-douglas-hurley.png";
import ansari from "../assets/img/crew/image-anousheh-ansari.png";
import mark from "../assets/img/crew/image-mark-shuttleworth.png";
import victor from "../assets/img/crew/image-victor-glover.png";

const Crew = () => {
  const [selectCrew, setSelectCrew] = useState("douglas");

  const Crew = {
    douglas: {
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: douglas,
    },
    mark: {
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: mark,
    },
    victor: {
      role: "PILOT",
      name: "VICTOR GLOVER",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: victor,
    },
    ansari: {
      role: "FLIGHT ENGINNER",
      name: "ANOUSHEH ANSARI",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: ansari,
    },
  };

  const current = Crew[selectCrew];

  return (
    <div className='bg-[url("./assets/img/crew/crew_desktop.jpg")] object-contain bg-cover bg-center min-h-screen pl-10 pt-10 overflow-hidden'>
      <Header />
      <div className="flex w-full justify-around pt-10 px-14 text-white max-lg:flex-col">
        <section className="flex flex-col gap-7 w-1/2 max-lg:w-full">
          <h1 className="text-2xl max-sm:text-xl text-center">
            <span className="text-gray-500">02 </span>MEET YOUR CREW
          </h1>
          <h2 className="text-3xl text-gray-500 max-lg:text-center max-sm:text-2xl">{current.role}</h2>
          <h3 className="text-5xl max-lg:text-center max-sm:text-3xl">{current.name}</h3>
          <p className="max-lg:text-center">{current.bio}</p>
          <div className="flex gap-5 max-lg:justify-center pb-10">
            {Object.keys(Crew).map((key) => (
              <button
                key={key}
                onClick={() => setSelectCrew(key)}
                className={`w-4 h-4 rounded-full cursor-pointer max-sm:w-3 max-sm:h-3 ${selectCrew === key ? ' bg-white' : 'bg-gray-500'}`}
              ></button>
            ))}
          </div>
        </section>
        <figure className="flex justify-center w-full">
          <img src={current.image} className="w-[45%]" />
        </figure>
      </div>
    </div>
  );
};

export default Crew;

import React from "react";
import Header from "./Header";
import douglas from "../assets/img/crew/image-douglas-hurley.png";
import anousheh from "../assets/img/crew/image-anousheh-ansari.png";
import mark from "../assets/img/crew/image-mark-shuttleworkth.png";
import victor from "../assets/img/crew/image-victor-glover.png";

const Crew = () => {
  const [selectCrew, setSelectCrew] = useState('douglas')

  const Crew = {
    douglas: {
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: douglas
    },
    mark: {
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: mark
    },
    victor: {
      role: "PILOT",
      name: "VICTOR GLOVER",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: victor
    },
    douglas: {
      role: "FLIGHT ENGINNER",
      name: "DOUGLAS HURLEY",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: douglas
    }
  }

  return (
    <div className='bg-[url("./assets/img/crew/crew_desktop.jpg")] object-contain bg-cover bg-center h-dvh pl-10 pt-10 overflow-hidden'>
      <Header />
      <div className="flex w-full justify-around pt-10 px-14 text-white ">
        <section className="flex flex-col gap-7 w-1/2 ">
          <h1 className="text-2xl">
            <span className="text-gray-500">02 </span>MEET YOUR CREW
          </h1>
          <h2 className="text-3xl text-gray-500">COMMANDER</h2>
          <h3 className="text-5xl">DOUGLAS HURLEY</h3>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div className="flex gap-5">
            <button className="w-4 h-4 rounded-full bg-white"></button>
            <button className="w-4 h-4 rounded-full bg-red-50/25"></button>
            <button className="w-4 h-4 rounded-full bg-red-50/25"></button>
            <button className="w-4 h-4 rounded-full bg-red-50/25"></button>
          </div>
        </section>
        <figure className="flex justify-center w-full">
          <img src={douglas} className="w-[45%]" />
        </figure>
      </div>
    </div>
  );
};

export default Crew;

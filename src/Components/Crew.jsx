import React from "react";
import Header from "./Header";
import douglas from "../assets/img/crew/image-douglas-hurley.png";

const Crew = () => {
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

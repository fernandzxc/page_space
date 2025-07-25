import React from "react";
import Header from "./Header";
import moon from "../assets/img/image-moon.png";

const Destination = () => {
  return (
    <div className='bg-[url("./assets/img/destination_desktop.jpg")] object-contain bg-cover bg-center h-screen pl-10 pt-10'>
      <Header />

      <div className="flex w-full h-4/5 justify-around pt-10 px-14 text-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">
            <span className="text-gray-500">01</span> PICK YOUR DESTINATION
          </h1>
          <figure className="w-3/4">
            <img src={moon} />
          </figure>
        </div>
        <div className="w-1/2 flex flex-col gap-5 ">
          <div className="flex gap-5 text-lg">
            <button>MOON</button>
            <button>MARS</button>
            <button>EUROPA</button>
            <button>TITAN</button>
          </div>
          <section className="flex flex-col gap-10">
            <h1 className="text-7xl">MOON</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
          </section>
          <div className="flex gap-5 justify-around">
            <div className="text-center">
              <h2 className="text-gray-500">Avg. distance</h2>
              <p className="text-2xl">384,400 km</p>
            </div>
            <div className="text-center">
              <h2 className="text-gray-500">Est. travel time</h2>
              <p className="text-2xl">3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

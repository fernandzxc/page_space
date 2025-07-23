import React from "react";
import Header from "./Header";
import moon from "../assets/img/image-moon.png";

const Destination = () => {
  return (
    <div className='bg-[url("./assets/img/destination_desktop.jpg")] object-contain bg-cover bg-center h-screen pl-10 pt-10'>
      <Header />

      <div className="flex w-full h-4/5 justify-around items-center text-white">
        <div>
          <h1>01 Pick your destination</h1>
          <figure>
            <img src={moon} />
          </figure>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex gap-5">
            <button>MOON</button>
            <button>MARS</button>
            <button>EUROPA</button>
            <button>TITAN</button>
          </div>
          <section>
            <h1>MOON</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </section>
          <hr />
          <div>
            <div>
              <h2>Avg. distance</h2>
              <p>384,400 km</p>
            </div>
            <div>
                <h2>Est. travel time</h2>
                <p>3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

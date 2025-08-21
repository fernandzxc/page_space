import React from "react";
import Header from "./Header";
import { useState } from "react";
import moon from "../assets/img/image-moon.png";
import mars from "../assets/img/image-mars.png";
import titan from "../assets/img/image-titan.png";
import europa from "../assets/img/image-europa.png";

const Destination = () => {
  const [selectDestination, setSelectDestination] = useState("moon");

  const Destination = {
    moon: {
      name: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 Days",
      image: moon,
    },
    mars: {
      name: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travelTime: "9 Months",
      image: mars,
    },
    europa: {
      name: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travelTime: "3 years",
      image: europa,
    },
    titan: {
      name: "TITAN",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travelTime: "7 years",
      image: titan,
    },
  };

  const current = Destination[selectDestination];

  return (
    <div className='bg-[url("./assets/img/destination_desktop.jpg")] object-contain bg-cover bg-center h-screen pl-10 pt-10'>
      <Header />

      <div className="flex w-full h-4/5 justify-around pt-10 px-14 text-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">
            <span className="text-gray-500">01</span> PICK YOUR DESTINATION
          </h1>
          <figure className="w-4/6">
            <img src={current.image} className=""/>
          </figure>
        </div>
        <div className="w-1/2 flex flex-col gap-5 ">
          <div className="flex gap-5 text-lg relative">
            {Object.keys(Destination).map((key) => (
              <button
                key={key}
                onClick={() => setSelectDestination(key)}
                className={`destination-btn ${
                  selectDestination === key
                    ? "active bg-white left-0 right-0 bottom-0 h-1 rounded-2xl"
                    : "left-0 right-0 bottom-0 h-1 hover:bg-gray-500 rounded-2xl"
                }`}
              >
                {Destination[key].name}
              </button>
            ))}
          </div>
          <section className="flex flex-col gap-10">
            <h1 className="text-7xl">{current.name}</h1>
            <p>{current.description}</p>
            <hr />
          </section>
          <div className="flex gap-5 justify-around">
            <div className="text-center">
              <h2 className="text-gray-500">Avg. distance</h2>
              <p className="text-2xl">{current.distance}</p>
            </div>
            <div className="text-center">
              <h2 className="text-gray-500">Est. travel time</h2>
              <p className="text-2xl">{current.travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

import React from "react";
import bg from "../assets/bgImageHero.avif";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative  h-1/2 bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="lg:flex flex-1 items-center justify-between relative z-10 max-w-5xl px-6 py-12 text-white text-center">
        <div className="lg:w-2/3 w-full">
          {" "}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Share & grow the world's knowledge!
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8">
            We want to connect the people who have knowledge to the people who
            need it, to bring together people with different perspectives so
            they can understand each other better, and to empower everyone to
            share their knowledge.
          </p>
        </div>
        <Link to={"/sign-up"}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Create A New Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

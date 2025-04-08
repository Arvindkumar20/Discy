import React from "react";
import LeftSidebar from "./home/layout/LeftSidebar";
import MainHome from "./home/MainHome";
import RightSideBar from "./home/layout/RightSideBar";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="md:flex flex-1 items-start justify-between">
        <div className="lg:flex hidden">
          <LeftSidebar />
        </div>
        <div className="lg:w-2/3 w-full">
          {" "}
          <MainHome />
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default Home;

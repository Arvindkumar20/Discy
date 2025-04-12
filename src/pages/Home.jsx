import React from "react";
import LeftSidebar from "./home/layout/LeftSidebar";
import MainHome from "./home/MainHome";
import RightSideBar from "./home/layout/RightSideBar";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MainHome/>
      </>
  );
};

export default Home;

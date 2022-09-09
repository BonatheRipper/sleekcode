import React from "react";
import { useState } from "react";
import Wave from "react-wavify";
import Navbar from "../components/Navbar";
import HomeBody from "../components/HomeBody";
import SideBar from "../components/SideBar";
import { useGlobalContext } from "../utils/GlobalContext";

const Home = () => {
  const { day, setDay, navActive, setNavActive } = useGlobalContext();
  return (
    <div className={` ${!day ? "mainNight" : ""} main absolute `}>
      <div className={`slantedA ${day ? "slantedDay" : " "} relative md:my-0`}>
        <SideBar day={day} navActive={navActive} setNavActive={setNavActive} />
        <HomeBody day={day} />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useState } from "react";
import Wave from "react-wavify";
import Navbar from "../components/Navbar";
import HomeBody from "../components/HomeBody";
import SideBar from "../components/SideBar";

const Home = () => {
  const [day, setDay] = useState(true);
  const [navActive, setNavActive] = useState(false);
  return (
    <div className={` ${!day ? "mainNight" : ""} main absolute `}>
      <div className={`slantedA ${day ? "slantedDay" : " "} relative `}>
        <Navbar
          day={day}
          css={`text-white `}
          setDay={setDay}
          navActive={navActive}
          setNavActive={setNavActive}
        />
        <SideBar day={day} navActive={navActive} setNavActive={setNavActive} />
        <HomeBody day={day} />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DayAndNight from "./DayAndNight";

import SearchBar from "./SearchBar";
import SiteAuthor from "./SiteAuthor";
import TopLogo from "./TopLogo";

const Navbar = ({ day, setDay, navActive, setNavActive, css }) => {
  const [activeX, setactiveX] = useState(false);

  return (
    <div
      id="navBar"
      className={`bg-none navBar  fixed ${css} ${
        !day ? "opacity-90 border-b border-gray-600 text-white" : ""
      }  m-0 z-50  py-2 pt-4 flex  flex-row items-center px-4  w-full justify-between`}
    >
      <div className="rightNavItems flex items-center md:ml-40 ">
        <TopLogo day={day} navActive={navActive} setNavActive={setNavActive} />
      </div>
      <div className="rightNavItems flex items-center md:mr-40 ">
        <DayAndNight day={day} setDay={setDay} />
        <SearchBar />
        <SiteAuthor activeX={activeX} setactiveX={setactiveX} />
      </div>
    </div>
  );
};

export default Navbar;

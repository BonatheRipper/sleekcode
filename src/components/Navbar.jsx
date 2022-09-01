import React from "react";
import { useState } from "react";
import DayAndNight from "./DayAndNight";

import SearchBar from "./SearchBar";
import SiteAuthor from "./SiteAuthor";
import TopLogo from "./TopLogo";

function Navbar({ day, setDay, navActive, setNavActive }) {
  const [activeX, setactiveX] = useState(false);

  return (
    <div
      id="navBar"
      className={` fixed text-white ${
        !day ? "opacity-40" : ""
      }  m-0  z-50 py-2 pt-4 flex relative flex-row items-center px-4  w-full justify-between`}
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
}

export default Navbar;

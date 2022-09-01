import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import OverviewTable from "../components/OverviewTable";
import OverViewTopText from "../components/OverViewTopText";
import SideBar from "../components/SideBar";
import Sidebarnav1 from "../components/Sidebarnav1";

const Overview = ({}) => {
  const [day, setDay] = useState(true);
  const [navActive, setNavActive] = useState(false);

  return (
    <div className={` main absolute ${!day ? "mainNight text-white" : ""} `}>
      <div className={`fixed w-full`}>
        <Navbar
          day={day}
          setDay={setDay}
          css={`
            ${!day ? "text-white" : "text-black shadow-lg"}
          `}
          navActive={navActive}
          setNavActive={setNavActive}
        />
        <SideBar day={day} navActive={navActive} setNavActive={setNavActive} />
        <Sidebarnav1 day={day} css={` w-2/12  hidden md:block`} />
        <OverviewTable />
        <div
          id="overviewContent "
          className="w-full  h-screen flex justify-center py-12 "
        >
          <OverViewTopText />
          <div id="LangaugesActive" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import OverviewTable from "../components/OverviewTable";
import OverViewTopText from "../components/OverViewTopText";
import SideBar from "../components/SideBar";
import Sidebarnav1 from "../components/Sidebarnav1";
import SolvedCircle from "../components/SolvedCircle";
import { LangType1, LangType2 } from "../components/SolvedLangs";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJava } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";

const Overview = ({}) => {
  const [day, setDay] = useState(true);
  const [navActive, setNavActive] = useState(false);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);

  function progressBarNum(num, counterSet) {
    var counter = 0;
    setInterval(() => {
      if (counter === num) {
        clearInterval();
      } else {
        counter++;
        counterSet((prev) => {
          return `${counter}%`;
        });
      }
    }, 20);
    console.log(counter);
  }
  useEffect(() => {
    progressBarNum(75, setCounter1);
    progressBarNum(70, setCounter2);
    progressBarNum(65, setCounter3);
    progressBarNum(90, setCounter4);
    progressBarNum(77, setCounter5);
  }, []);
  return (
    <div className={` main relative  ${!day ? "mainNight text-white" : ""} `}>
      <div className={`relative w-full `}>
        <Navbar
          day={day}
          setDay={setDay}
          css={`
            ${!day ? "text-white" : "text-black shadow-lg fixed"}
          `}
          navActive={navActive}
          setNavActive={setNavActive}
        />
        <SideBar day={day} navActive={navActive} setNavActive={setNavActive} />
        <Sidebarnav1 day={day} css={` w-2/12  hidden md:block`} />
        <OverviewTable />
        <div
          id="overviewContent "
          className="w-full  h-screen flex flex-col items-center py-12 "
        >
          <OverViewTopText />
          <div id="LangaugesActive" className="flex flex-col my-3">
            <SolvedCircle
              cssOne={` h-20 w-20 `}
              cssTwo={`h-16 w-16`}
              counter1={counter1}
              day={day}
              cx="40"
              cy="40"
              r="33"
              counter={`counter1`}
              langType={<LangType1 />}
            />
            <div className="flex">
              <SolvedCircle
                cssOne={` h-16 w-16 `}
                cssTwo={`h-12 w-12`}
                counter1={counter2}
                day={day}
                cx="32"
                cy="32"
                r="26"
                textCss="text-xs"
                counter={`counter2`}
                langType={<LangType2 icon={<TbBrandJavascript />} />}
              />
              <SolvedCircle
                cssOne={` h-16 w-16 `}
                cssTwo={`h-12 w-12`}
                counter1={counter3}
                day={day}
                cx="32"
                cy="32"
                r="26"
                textCss="text-xs"
                counter={`counter3`}
                langType={<LangType2 icon={<SiJava />} />}
              />
              <SolvedCircle
                cssOne={` h-16 w-16 `}
                cssTwo={`h-12 w-12`}
                counter1={counter4}
                day={day}
                cx="32"
                cy="32"
                r="26"
                textCss="text-xs"
                counter={`counter4`}
                langType={<LangType2 icon={<CgCPlusPlus />} />}
              />
              <SolvedCircle
                cssOne={` h-16 w-16 `}
                cssTwo={`h-12 w-12`}
                counter1={counter5}
                day={day}
                cx="32"
                cy="32"
                r="26"
                textCss="text-xs"
                counter={`counter5`}
                langType={<LangType2 icon={<CgCPlusPlus />} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

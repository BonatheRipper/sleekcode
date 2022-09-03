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
import { BsPatchQuestion, BsCodeSlash } from "react-icons/bs";

const Overview = ({}) => {
  const [day, setDay] = useState(true);
  const [navActive, setNavActive] = useState(false);
  //   const [counter1, setCounter1] = useState(0);
  //   const [counter2, setCounter2] = useState(0);
  //   const [counter3, setCounter3] = useState(0);
  //   const [counter4, setCounter4] = useState(0);
  //   const [counter5, setCounter5] = useState(0);
  //   const counters = {
  //     counter1: 0,
  //     counter2: 0,
  //     counter3: 0,
  //     counter4: 0,
  //     counter5: 0,
  //   };
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
  });
  const [total, setTotal] = useState({
    total1: 0,
    total2: 0,
  });

  const progressBarCounter = (num, speed, counterSet, counterType) => {
    var counter = 0;
    setInterval(() => {
      if (counter === num) {
        clearInterval();
      } else {
        counter++;
        counterSet((prev) => ({ ...prev, [counterType]: counter }));
      }
    }, speed);
    console.log(counter);
  };
  useEffect(() => {
    progressBarCounter(75, 20, setCounters, "counter1");
    progressBarCounter(70, 20, setCounters, "counter2");
    progressBarCounter(65, 20, setCounters, "counter3");
    progressBarCounter(90, 20, setCounters, "counter4");
    progressBarCounter(77, 20, setCounters, "counter5");
    progressBarCounter(1288, 1, setTotal, "total1");
    progressBarCounter(2000, 1, setTotal, "total2");
  }, []);
  console.log(counters);

  const { counter1, counter2, counter3, counter4, counter5 } = counters;
  const { total1, total2 } = total;

  return (
    <div className={` main relative  ${!day ? "mainNight text-white  " : ""} `}>
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
          className="w-full  flex flex-col items-center py-12 "
        >
          <OverViewTopText />
          <div
            id={` ${
              !day ? "mainNight text-white " : ""
            } LangaugesActive" className="flex flex-col my-3 h-auto`}
          >
            <SolvedCircle
              cssOne={` h-20 w-20 `}
              cssTwo={`h-16 w-16`}
              counter1={counter1}
              day={day}
              cx="40"
              cy="40"
              r="33"
              counter={`counter1`}
              langType={<LangType1 total1={total1} total2={total2} />}
            />
            <div className="flex ">
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
                langType={
                  <LangType2
                    icon={<TbBrandJavascript />}
                    css={`text-red-900`}
                  />
                }
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
                langType={
                  <LangType2 icon={<SiJava />} css={`text-yellow-800`} />
                }
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
                langType={
                  <LangType2 icon={<TbBrandPython />} css={`text-green-900`} />
                }
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
                langType={
                  <LangType2 icon={<CgCPlusPlus />} css={`text-orange-900`} />
                }
              />
            </div>
          </div>
        </div>
        <div className="Overview px-4 py-4">
          <h1 className="text-2xl md:3xl font-sans  py-4 flex items-center">
            <span className="pr-2">
              <BsPatchQuestion />
            </span>
            What to know
          </h1>
          <p className="font-thin	">
            Solutions provided are based mostly on problems on Leetcode and
            Hacharank and those uploaded by users and also approved by admins of
            this platform
          </p>

          <h1 className="text-2xl md:3xl font-sans  py-4 flex items-center">
            <span className="pr-2">
              <BsCodeSlash />
            </span>
            Code Highlighter Used
          </h1>
          <p className="font-thin	">
            WE used Prism to highlight 99% of codes on this website irrespective
            of the language
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;

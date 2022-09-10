import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import OverViewTopText from "../components/OverViewTopText";
import SideBar from "../components/SideBar";
import Sidebarnav1 from "../components/Sidebarnav1";
import SolvedCircle from "../components/SolvedCircle";
import { LangType1, LangType2 } from "../components/SolvedLangs";
import { TbBrandJavascript, TbDetails } from "react-icons/tb";
import { SiJava, SiPrisma } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { DiMitlicence } from "react-icons/di";

import {
  BsPatchQuestion,
  BsArrowLeftSquareFill,
  BsCodeSlash,
} from "react-icons/bs";
import { useGlobalContext } from "../utils/GlobalContext";
import TopLogo from "../components/TopLogo";
import BottomQuestionNav from "../components/BottomQuestionNav";
const Overview = ({}) => {
  const { day, setNavcss, attheBottom } = useGlobalContext();
  const [navActive, setNavActive] = useState(false);
  const [navBack, setNavBack] = useState(false);

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
        counterSet((prev) => ({ ...prev, [counterType]: `${counter}%` }));
      }
    }, speed);
  };
  useEffect(() => {
    progressBarCounter(75, 20, setCounters, "counter1");
    progressBarCounter(70, 20, setCounters, "counter2");
    progressBarCounter(65, 20, setCounters, "counter3");
    progressBarCounter(90, 20, setCounters, "counter4");
    progressBarCounter(77, 20, setCounters, "counter5");
    progressBarCounter(1288, 1, setTotal, "total1");
    progressBarCounter(2000, 1, setTotal, "total2");
    if (day) {
      setNavcss("bg-white");
    }
    if (navBack && !day) {
      setNavcss("bg-gray-900");
    }
  }, [day, navBack]);

  const { counter1, counter2, counter3, counter4, counter5 } = counters;
  const { total1, total2 } = total;

  return (
    <div
      className={` main relative w-full ${
        !day ? "mainNight text-white  " : ""
      } relative  h-screen `}
    >
      <SideBar day={day} navActive={navActive} setNavActive={setNavActive} />
      <Sidebarnav1 day={day} css={` w-2/12  hidden md:block py-20 `} />
      <div className={`w-full md:flex justify-end ${!day ? "mainNight" : ""}`}>
        <div className={`relative md:w-10/12  flex justify-center flex-col`}>
          {/* <OverviewTable /> */}
          <div
            id="overviewContent "
            className="w-full  flex flex-col items-center py-12 my-8"
          >
            <OverViewTopText />
            <div
              className={` ${
                !day ? "mainNight text-white " : ""
              } LangaugesActive flex flex-col my-3 h-auto overflow-hidden`}
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
              <div className="flex  flex-row justify-center items-center w-full">
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
                    <LangType2
                      icon={<TbBrandPython />}
                      css={`text-green-900`}
                    />
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
          <div className="Overview px-4  mb-8">
            <div className="OverviewChild1">
              <h1 className="text-xl md:3xl font-sans  Grotesk py-4 flex items-center">
                <span className="pr-2 text-red-900">
                  <BsPatchQuestion />
                </span>
                What to know
              </h1>
              <p className="font-thin	">
                Solutions provided are based mostly on problems on Leetcode and
                Hacharank and those uploaded by users and also approved by
                admins of this platform
              </p>
            </div>
            <div className="OverviewChild1">
              <h1 className="text-xl md:3xl font-sans Grotesk  py-4 flex items-center">
                <span className="pr-2 text-purple-900 ">
                  <BsCodeSlash />
                </span>
                Code Highlighter Used
              </h1>
              <p className="font-thin 	">
                WE used Prism to highlight 99% of codes on this website
                irrespective of the language
              </p>
            </div>
            <div className="OverviewChild1">
              <h1 className="text-xl md:3xl font-sans Grotesk  py-4 flex items-center">
                <span className="pr-2 text-orange-900 ">
                  <TbDetails />
                </span>
                More details{" "}
              </h1>
              <p className="font-thin flex	">Launched on 31st August 2022</p>
            </div>
            <div className="OverviewChild1">
              <h1 className="text-xl md:3xl font-sans Grotesk  py-4 flex items-center">
                <span className="pr-2 text-indigo-900 ">
                  <DiMitlicence />
                </span>
                License
              </h1>
              <p className="font-thin flex 	items-center">
                <span className="px-4">
                  {" "}
                  Licensed under the MIT License, Copyright © 2022.
                </span>
                <span className="py-4"> {<TopLogo css={"text-black "} />}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <BottomQuestionNav /> */}
    </div>
  );
};

export default Overview;

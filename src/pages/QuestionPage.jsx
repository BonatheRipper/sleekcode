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
import { TbBrandJavascript, TbDetails } from "react-icons/tb";
import { SiJava, SiPrisma } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { DiMitlicence } from "react-icons/di";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

import {
  BsPatchQuestion,
  BsArrowLeftSquareFill,
  BsCodeSlash,
} from "react-icons/bs";
import { useGlobalContext } from "../utils/GlobalContext";
import TopLogo from "../components/TopLogo";
import BottomQuestionNav from "../components/BottomQuestionNav";
const ProblemsPage = ({}) => {
  const { day, setNavcss, attheBottom } = useGlobalContext();
  const [navActive, navBack, setNavActive] = useState(false);

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
      } relative  h-screen  `}
    >
      <SideBar day={day} navActive={navActive} setNavActive={setNavActive} />
      <Sidebarnav1 day={day} css={` w-2/12  hidden md:block py-20 `} />
      <div className={`w-full md:flex justify-end ${!day ? "mainNight" : ""}`}>
        <div className={`relative md:w-10/12  flex justify-center flex-col`}>
          <div
            id="overviewContent "
            className="w-full  flex flex-col  py-12 my-8 justify-start items-start"
          >
            {" "}
            <div className="question flex flex-row text-2xl md:text-3xl ">
              <span className="">1. </span>
              <span className="font-bold mx-2">Two Sum </span>
            </div>
            <div
              className={`${
                !day ? "bg-green-800" : "bg-green-600"
              } text-gray-100  rounded md:px-8 px-6 my-4 md:py-2  py-1 difficulty`}
            >
              <h5 className="mx-2"> EASY</h5>
            </div>
            <div className="container flex flex-col md:flex-row justify-center items-center my-4  w-full">
              <div className="border-b border-green-500 w-full md:w-6/12 h-56  my-2">
                <div className="options flex flex-row  rounded-t-full items-center ">
                  <div className="select w-4/12 flex rounded-t-sm md:flex-row  flex-col justify-center items-center border border-gray-500  py-4 px-2 text-sm">
                    <span>*</span>
                    <span>Description</span>
                  </div>
                  <div className="select w-4/12 flex rounded-t-sm md:flex-row  flex-col justify-center items-center border border-gray-500  py-4 px-2 text-sm">
                    <span>*</span>
                    <span>Solution</span>
                  </div>
                  <div className="select  w-4/12 flex rounded-t-sm md:flex-row  flex-col justify-center items-center border border-gray-500  py-4 px-2 text-sm">
                    <span>*</span>
                    <span>Submition</span>
                  </div>
                </div>
              </div>
              <div className="border border-red-500 w-full md:w-6/12 h-56 mx-2 my-2"></div>
            </div>
          </div>
        </div>
      </div>
      <BottomQuestionNav />
    </div>
  );
};

export default ProblemsPage;

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
import { SiJava, SiVisualstudiocode } from "react-icons/si";
import { TbCodeMinus } from "react-icons/tb";
import { RiTimerLine } from "react-icons/ri";
import { MdAccessTimeFilled, MdWorkspacesOutline } from "react-icons/md";
import { FcIdea } from "react-icons/fc";

import {
  BsPatchQuestion,
  BsLayoutTextSidebarReverse,
  BsCheckCircleFill,
} from "react-icons/bs";
import { useGlobalContext } from "../utils/GlobalContext";
import TopLogo from "../components/TopLogo";
import BottomQuestionNav from "../components/BottomQuestionNav";
const ProblemsPage = ({}) => {
  const { day, setNavcss, attheBottom } = useGlobalContext();
  const [navActive, navBack, setNavActive] = useState(false);
  const [options, setOptions] = useState("description");

  const handleOptionsClick = (e) => {
    setOptions(e.target.id);
  };
  const optionsSecondaryStyle = (item) => {
    return `${
      options === item
        ? `${
            day
              ? "border-t border-x  border-gray-300  "
              : "bg-gray-900 text-gray-300"
          } `
        : ""
    }`;
  };
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
              <span className="  mx-2">Two Sum </span>
            </div>
            <div
              className={`${
                !day ? "text-green-800" : "text-green-600"
              } text-gray-100  rounded md:px-8 px-6 my-1 md:py-2  py-1 font-extrabold difficulty`}
            >
              <h5 className="mx-2"> Easy</h5>
            </div>
            <div
              className={`${
                !day ? "text-gray-300" : "text-white"
              }  flex flex-row rounded md:px-8  my-2 md:py-2  py-1 text-xs difficulty`}
            >
              <span className="px-8 border bg-cyan-800 mx-0 rounded-xl ">
                {" "}
                Array
              </span>
              <span className="px-8 border bg-gray-800 mx-0  rounded-xl ">
                {" "}
                Hash Table
              </span>
            </div>
            <div
              className={`${
                !day ? "text-gray-300" : ""
              }  flex flex-col  rounded md:px-8  my-2 md:py-2  py-1 text-xs difficulty`}
            >
              <div className="flex flex-row px-2 items-center">
                {" "}
                <span className=" text-xl text-red-700">
                  {" "}
                  <RiTimerLine />
                </span>
                <span className=" text-base px-2 font-bold"> Time </span>
                <span className="  px-1 text-xl font-thin tangerine">
                  {" "}
                  O(n){" "}
                </span>
              </div>
              <div className="flex flex-row px-2 items-center">
                {" "}
                <span className=" text-xl text-purple-700">
                  {" "}
                  <MdWorkspacesOutline />
                </span>
                <span className=" text-base px-2 font-bold"> Space </span>
                <span className="  px-1 text-xl font-thin tangerine">
                  {" "}
                  O(n){" "}
                </span>
              </div>
            </div>
            <div className="container flex flex-col md:flex-row justify-center items-center my-6 w-full">
              <div className="border-b w-full md:w-6/12   my-2">
                <div
                  className={`options ${
                    day ? " border-gray-300 " : "border-gray-600"
                  } flex flex-row justify-between rounded-t-full items-end border-b`}
                >
                  <div
                    onClick={(e) => setOptions("description")}
                    id="description"
                    className={`select ${optionsSecondaryStyle(
                      "description"
                    )} flex rounded-t-sm    flex-col justify-center items-center  py-2   w-4/12 mx-1 text-sm`}
                  >
                    <span className="px-2  text-xl text-purple-800 ">
                      <TbCodeMinus />
                    </span>
                    <span className="">Description</span>
                  </div>
                  <div
                    id="solution"
                    onClick={(e) => setOptions("solution")}
                    className={`select  ${optionsSecondaryStyle(
                      "solution"
                    )}  flex rounded-t-sm   flex-col justify-center items-center py-2  w-4/12 mx-1 text-sm`}
                  >
                    <span className="px-2  text-lg  ">
                      <FcIdea />
                    </span>
                    <span>Solution</span>
                  </div>
                  <div
                    id="submissions"
                    onClick={(e) => setOptions("submissions")}
                    className={`select ${optionsSecondaryStyle(
                      "submissions"
                    )} flex rounded-t-sm   flex-col justify-center items-center py-2   w-4/12 mx-1 text-sm`}
                  >
                    <span className="px-2  text-lg text-blue-800 ">
                      <SiVisualstudiocode />
                    </span>
                    <span>Submissions</span>
                  </div>
                </div>
                <div className="questionBox px-4 my-4 text-sm 	">
                  {" "}
                  <p className="leading-loose text-gray-600 font-thin">
                    You are given two strings s and p where p is a subsequence
                    of s. You are also given a distinct 0-indexed integer array
                    removable containing a subset of indices of s (s is also
                    0-indexed). You want to choose an integer k such that, after
                    removing k characters from s using the first k indices in
                    removable, p is still a subsequence of s. More formally, you
                    will mark the character at s[removable[i]] then remove all
                    marked characters and check if p is still a subsequence.
                    Return the maximum k you can choose such that p is still a
                    subsequence of s after the removals. A subsequence of a
                    string is a new string generated from the original string
                    with some characters (can be none) deleted without changing
                    the relative order of the remaining characters.
                  </p>
                </div>
              </div>
              <div className="border border-red-500 w-full md:w-6/12 h-56  my-2"></div>
            </div>
          </div>
        </div>
      </div>
      <BottomQuestionNav />
    </div>
  );
};

export default ProblemsPage;

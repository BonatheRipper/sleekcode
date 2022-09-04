import React from "react";
import { BsGithub } from "react-icons/bs";
import { DiGitCommit } from "react-icons/di";
import { GiBeveledStar } from "react-icons/gi";
import { useGlobalContext } from "../utils/GlobalContext";
const SiteAuthor = ({ activeX, setactiveX }) => {
  const { day } = useGlobalContext();
  return (
    <div
      onClick={() => setactiveX(!activeX)}
      // onMouseLeave={() => setactiveX(!activeX)}
      className={`byAuthor flex flex-row items-center px-2  ${
        activeX
          ? " fixed py-4 bg-gray-800 top-0 justify-center items-center left-0 w-full px-20 z-50"
          : "relative opacity-80  "
      } `}
    >
      <span
        onClick={() => setactiveX(true)}
        className={`text-2xl animate-pulse ${activeX ? "text-white" : ""}`}
      >
        <BsGithub />
      </span>
      <div
        className={`flex justify-between md:justify-evenly w-full ${
          activeX ? "flex-row text-white" : "hidden flex-col "
        } md:flex slide_in  px-2 md:flex-row`}
      >
        <div className="author  ">
          <span className="underline">Sleekcode</span>
        </div>
        <div className="flex flex-row items-center text-xs justify-evenly">
          <div className="flex items-center">
            <span className="px-1 text-xs">
              <GiBeveledStar />
            </span>
            <span className="">374</span>
          </div>
          <div className="flex items-center">
            <span className="px-1 text-xl">
              <DiGitCommit />
            </span>
            <span>374</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteAuthor;

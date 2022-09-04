import React from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useGlobalContext } from "../utils/GlobalContext";
const BottomQuestionNav = () => {
  const { attheBottom, day, problemsBtn } = useGlobalContext();
  return (
    <div
      style={{ zIndex: problemsBtn.isActive ? 9999 : "" }}
      className={`BottomNav ${
        attheBottom || problemsBtn.isActive ? "-bottom-40" : " bottom-0 "
      }  w-full z-50 fixed md:justify-end justify-center flex`}
    >
      <div
        className={` ${
          !day
            ? "mainNight text-white border-gray-700"
            : "BottomNavBgDay text-black "
        } shadow-3xl border-t  bottonNavContent w-full duration-1000  md:w-10/12 md:h-20  h-16`}
      >
        <div className="flex h-full justify-between py-2 items-center flex-row w-full px-2 md:mr-5">
          <div className="Prev h-full">
            <div className="flex flex-row justify-between items-center  h-full   ">
              <div className="arrow text-2xl">
                <HiOutlineArrowLeft />
              </div>
              <div className="question hidden  md:px-6 px-2 md:flex flex-col justify-center items-center">
                <span className="prevInner font-bold">Previous</span>
                <div className="questionInner">
                  <span className="questionNumber">1. </span>
                  <span className="questionNumber">Two Sum </span>
                </div>
              </div>
            </div>
          </div>
          <div className="next h-full">
            <div className="flex flex-row justify-between items-center  h-full  ">
              <div className="question   items-end md:px-6 px-2 md:flex flex-col justify-center ">
                <span className="prevInner font-bold hidden md:inline">
                  Next
                </span>
                <div className="questionInner text-xs text-right  md:text-base">
                  <span className="questionNumber">3. </span>
                  <span className="questionNumber">
                    Longest Substring Without Repeating Characters
                  </span>
                </div>
              </div>
              <div className="arrow text-2xl hover:animate-pulse">
                <HiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomQuestionNav;

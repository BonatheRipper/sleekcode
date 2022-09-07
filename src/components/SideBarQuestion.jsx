import React from "react";
import { useGlobalContext } from "../utils/GlobalContext";
import { demoQuestions } from "../seed/demoData";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const SideBarQuestion = ({ problemsBtn }) => {
  const { day } = useGlobalContext();

  const Difficulty = () => {
    const difficultyArray = [Easy(), Medium(), Hard()];

    function Easy() {
      return (
        <div className="flex justify-end items-center">
          <span
            className={`${
              !day ? "bg-green-800" : "bg-green-600"
            } text-gray-100  rounded-full px-2`}
          >
            Easy
          </span>
        </div>
      );
    }
    function Medium() {
      return (
        <div className="flex justify-end items-center">
          <span
            className={`${
              !day ? "bg-yellow-700" : "bg-yellow-600"
            } text-gray-100  rounded-full px-2`}
          >
            Medium
          </span>
        </div>
      );
    }
    function Hard() {
      return (
        <div className="flex justify-end items-center">
          <span
            className={`${
              !day ? "bg-red-800" : "bg-red-600"
            } text-gray-100  rounded-full px-2`}
          >
            Hard
          </span>
        </div>
      );
    }
    return difficultyArray[Math.floor(Math.random() * difficultyArray.length)];
  };
  //    bg - cyan - 500;
  return (
    <div
      className={` h-full w-full absolute mb-20 overflow-scroll  ${
        problemsBtn.isActive ? "left-0" : "-left-full"
      }`}
    >
      <div className="questionsContainer relative w-full h-auto ">
        <div className="Questions  flex flex-col h-full">
          {demoQuestions.slice(0, 35).map((question, index) => (
            <div
              key={question}
              className={`border ${
                !day ? " border-gray-700 " : "border-gray-200"
              } ${
                index === 35 ? "pb-28 " : " "
              }  px-2 md:px-4 w-full flex py-2 flex-row justify-between items-center text-xs md:text-sm`}
            >
              <div className="QuestionInner flex flex-row ">
                {/* <span className="pr-2 md:pr-3 ">{index + 1}</span> */}
                <span>{question}</span>
              </div>
              {Difficulty()}
            </div>
          ))}
          {problemsBtn.isActive && (
            <div
              className={` ${
                !day
                  ? " border-gray-700 mainNight"
                  : "border-gray-200 bg-gray-100"
              }  w-full md:w-6/12 text-xs md:text-base  border fixed bottom-0 py-3 px-2 flex flex-row justify-between items-center`}
            >
              <div className="flex font-bold flex-row justify-between items-center">
                <span className="px-2">
                  {" "}
                  <MdArrowBackIosNew />
                </span>
                <span>Previous</span>
              </div>
              <div className="flex flex-row justify-between items-center">
                <span>Next</span>
                <span className="px-2 font-bold">
                  <MdArrowForwardIos />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarQuestion;

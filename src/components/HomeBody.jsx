import React from "react";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiJava } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import HomeAndMenuButton from "./HomeAndMenuButton";
const HomeBody = ({ day }) => {
  return (
    <div
      className="w-full h-80  md:px-40  absolute md:top-64 z-40"
      // style={{ top: "5" }}
    >
      <div className="flex md:flex-row flex-col-reverse	 w-full md:justify-between justify-center">
        <div className="flex flex-col top-12 absolute md:mb-20 md:relative justify-center w-full  md:items-start fontOs ">
          <p
            style={{ fontSize: "28px", fontWeight: 900 }}
            className={` ${
              !day ? "text-white opacity-80" : ""
            } Farsan underline px-2  xs:text-sm`}
          >
            Top Interview Algorithm Solutions
          </p>
          <div
            style={{ fontSize: "28px", fontWeight: 300 }}
            className={`mb-4 ${!day ? "text-white opacity-80" : ""} `}
          >
            <p className="Farsan px-4">
              Solutions
              <span className="text-gray-600 Farsan font-bold ">
                {" "}
                Available in
              </span>
            </p>

            <div className="flex flex-col md:flex-col px-4 md:my-2 my-4">
              <p className="flex flex-row my-4 items-center ">
                <span className="px-2  text-red-800 ">
                  <DiJavascript />
                </span>
                <span className=" text-2xl md:text-3xl tangerine     font-extrabold">
                  Javascript
                </span>
              </p>
              <p className="flex flex-row my-4 items-center  ">
                <span className=" text-blue-800 px-2 ">
                  <FaPython />
                </span>
                <span className="text-2xl md:text-3xl tangerine    font-extrabold">
                  Python
                </span>
              </p>
              <p className="flex flex-row my-4 items-center  ">
                <span className="px-2  text-yellow-600">
                  <SiJava />
                </span>
                <span className="text-2xl md:text-3xl tangerine     font-extrabold">
                  Java
                </span>
              </p>
              <p className="flex flex-row my-4 items-center ">
                <span className="px-2 text-pink-900 ">
                  <CgCPlusPlus />
                </span>
                <span className="text-2xl md:text-3xl tangerine      font-extrabold">
                  C++
                </span>
              </p>
            </div>
            <div
              style={{ fontSize: "18px", fontWeight: 500 }}
              className="buttonsStart px-4 flex flex-row py-2 absolute z-40 md:relative"
            >
              <HomeAndMenuButton
                text={"Quick Guide"}
                to={`/overview`}
                css={`px-6 py-2 text-black border-gray-400 border flex justify-center items-center mr-4 rounded-full bg-white font-mono hover:bg-cyan-500 hover:text-white`}
              />
              <HomeAndMenuButton
                text={"Get Solutions"}
                to={`/`}
                css={`px-6 py-2 flex justify-center items-center text-sm mr-4 rounded-full hover:bg-white font-mono bg-cyan-500 text-white hover:text-black`}
              />
            </div>
          </div>
        </div>
        <div className="headerIMG fixed -bottom-14 -z-0 md:relative">
          <img
            src="https://arcticdata.io/wp-content/uploads/open-source.png"
            className="w-full h-full"
            alt="topImg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBody;

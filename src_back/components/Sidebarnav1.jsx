import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../utils/GlobalContext";
import { HomeAndMenuButton, ProblemsButton } from "./HomeAndMenuButton";

const Sidebarnav1 = ({ day, css }) => {
  const { problemsBtn, setProblemsBtn } = useGlobalContext();
  const handleNavClick = () => {
    // alert("I clicked on the button");
    setProblemsBtn((prev) => ({ ...prev, isActive: !prev.isActive }));
  };
  return (
    <div
      style={{ zIndex: problemsBtn.isActive ? 9998 : "" }}
      id="sideBarNav1"
      className={`${day ? "bg-gray-100 " : "mainNight "} ${
        problemsBtn.isActive ? problemsBtn.css : css
      } h-full opacity-100 z-40 fixed  flex flex-col`}
    >
      <h1 className="flex justify-center my-8 text-sm text-center mdtext-1xl font-bold uppercase mx-4">
        Algorithm Solution
      </h1>
      <div
        className={`HomeAndMenuButton ${problemsBtn.isActive ? "hidden" : ""}`}
      >
        <HomeAndMenuButton
          text={"Quick Guide"}
          to={`/overview`}
          css={`px-6 py-3 text-black border-gray-200 border flex justify-center items-center bg-white font-mono hover:bg-cyan-500 hover:text-white`}
        />
        <HomeAndMenuButton
          text={"Get Solutions"}
          to={`/`}
          css={`px-6 py-4 flex justify-center items-center text-sm  my-1 hover:bg-white font-mono bg-cyan-500 text-white hover:text-black`}
        />
      </div>

      <div
        className={`w-full bg-red-700 h-full  ${
          problemsBtn.isActive ? " top-20" : ""
        }`}
      >
        {" "}
        <ProblemsButton
          text={"All Problems"}
          click={() => handleNavClick()}
          css={`px-6 py-3 text-black border-gray-200 border flex justify-center items-center bg-white font-mono hover:bg-cyan-500 hover:text-white`}
        />
      </div>
    </div>
  );
};

export default Sidebarnav1;

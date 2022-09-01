import React from "react";
import HomeAndMenuButton from "./HomeAndMenuButton";

const SideBar = ({ navActive, day }) => {
  return (
    <div
      className={`fixed w-full h-full  z-50   ${
        navActive ? "left-0 " : "-left-full "
      } md:-left-full`}
    >
      <div
        className={`${
          day ? "bg-gray-100 " : "bg-gray-600 "
        } w-6/12 h-full opacity-100 z-40 fixed  flex flex-col`}
      >
        <h1 className="flex justify-center my-8 text-1xl font-bold uppercase mx-4">
          Algorithm Solution
        </h1>
        <HomeAndMenuButton
          text={"Quick Guide"}
          css={`px-6 py-3 text-black border-gray-400 border flex justify-center items-center bg-white font-mono hover:bg-cyan-500 hover:text-white`}
        />
        <HomeAndMenuButton
          text={"Get Solutions"}
          css={`px-6 py-4 flex justify-center items-center text-sm  my-1 hover:bg-white font-mono bg-cyan-500 text-white hover:text-black`}
        />{" "}
      </div>
      <div className="bg-black  h-full opacity-70 w-full z-10 "></div>
    </div>
  );
};

export default SideBar;

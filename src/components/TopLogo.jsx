import React from "react";
import { IoIosAperture } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const TopLogo = ({ day, navActive, setNavActive }) => {
  return (
    <div className="flex flex-row font-bold md:text-xl items-center">
      <span
        onClick={() => setNavActive(!navActive)}
        className={`${
          day ? "text-black" : "text-white"
        } mr-6 text-2xl md:hidden`}
      >
        <HiOutlineMenuAlt2 />
      </span>
      <span className={`${day ? "text-black" : "text-white"} mr-2 text-2xl`}>
        <IoIosAperture />
      </span>
      <span className={`${day ? "text-black" : "text-white"}`}>Sleek</span>
      <span className="text-green-600 ">Code</span>
    </div>
  );
};

export default TopLogo;
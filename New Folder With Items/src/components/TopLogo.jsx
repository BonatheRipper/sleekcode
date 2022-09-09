import React from "react";
import { IoIosAperture } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";

import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../utils/GlobalContext";
const TopLogo = ({ day, css }) => {
  const { navActive, setNavActive } = useGlobalContext();
  return (
    <div className="flex flex-row font-bold md:text-xl items-center">
      <span
        onClick={() => setNavActive(!navActive)}
        className={`${
          day ? "text-black" : "text-white"
        } mr-6 text-2xl md:hidden ${css && "hidden"}`}
      >
        {navActive ? <ImCancelCircle /> : <HiOutlineMenuAlt2 />}
      </span>
      <NavLink to={`/`} className="flex flex-row ">
        <span
          className={`${
            day ? "text-black" : { css } || "text-white"
          } mr-2 text-2xl`}
        >
          <IoIosAperture />
        </span>
        <span className={`${day ? "text-black" : { css } || "text-white"}`}>
          Sleek
        </span>
        <span className="text-green-600 ">Code</span>
      </NavLink>
    </div>
  );
};

export default TopLogo;

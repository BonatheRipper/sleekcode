import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

import { useGlobalContext } from "../utils/GlobalContext";
export const HomeAndMenuButton = ({ text, css, to, click }) => {
  const { problemsBtn, day } = useGlobalContext();

  return (
    <span
      onClick={click}
      className={`${css} flex justify-between ${
        day
          ? "bg-white border border-gray-200"
          : "border-y border-gray-700 text-white"
      }`}
    >
      <NavLink to={to}>{text}</NavLink>
    </span>
  );
};
export const ProblemsButton = ({ text, css, to, click }) => {
  const { day } = useGlobalContext();

  return (
    <span onClick={click} className={`${css} bg-cyan-500 `}>
      <button
        to={to}
        className={`${
          day ? "text-white" : ""
        } flex justify-between w-full bg-cyan-500  items-center`}
      >
        <span className=" ">{text}</span>
        {useGlobalContext().problemsBtn.isActive ? (
          <ImCancelCircle />
        ) : (
          <MdOutlineArrowForwardIos />
        )}
      </button>
    </span>
  );
};

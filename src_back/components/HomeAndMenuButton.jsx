import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

import { useGlobalContext } from "../utils/GlobalContext";
export const HomeAndMenuButton = ({ text, css, to, click }) => {
  const { problemsBtn } = useGlobalContext();

  return (
    <span onClick={click} className={`${css} flex justify-between `}>
      <NavLink to={to}>{text}</NavLink>
    </span>
  );
};
export const ProblemsButton = ({ text, css, to, click }) => {
  return (
    <span onClick={click} className={`${css} `}>
      <button to={to} className="flex justify-between w-full items-center">
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

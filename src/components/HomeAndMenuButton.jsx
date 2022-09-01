import React from "react";
import { NavLink } from "react-router-dom";

const HomeAndMenuButton = ({ text, css, to }) => {
  return (
    <span className={`${css}`}>
      <NavLink to={to}>{text}</NavLink>
    </span>
  );
};

export default HomeAndMenuButton;

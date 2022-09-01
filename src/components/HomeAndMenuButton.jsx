import React from "react";
import { NavLink } from "react-router-dom";

const HomeAndMenuButton = ({ text, css }) => {
  return (
    <span className={`${css}`}>
      <NavLink to={`/`}>{text}</NavLink>
    </span>
  );
};

export default HomeAndMenuButton;

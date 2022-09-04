import React from "react";
import { HomeAndMenuButton } from "./HomeAndMenuButton";
import Sidebarnav1 from "./Sidebarnav1";
import { useGlobalContext } from "../utils/GlobalContext";
const SideBar = ({ day }) => {
  const { navActive, setNavActive } = useGlobalContext();
  return (
    <div
      className={`fixed w-full h-full  z-50   ${
        navActive ? "left-0 " : "-left-full "
      } md:-left-full`}
    >
      <Sidebarnav1 day={day} css={`w-6/12 `} />
      <div
        onClick={() => setNavActive(false)}
        className="bg-black  h-full opacity-70 w-full z-10 "
      ></div>
    </div>
  );
};

export default SideBar;

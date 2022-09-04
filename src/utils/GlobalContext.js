import React, { createContext, useContext, useState } from "react";

const GlobalContextProvider = createContext();

export const GlobalContext = ({ children }) => {
  const [day, setDay] = useState(true);
  const [navActive, setNavActive] = useState(false);
  const [navBack, setNavBack] = useState(false);
  const [navCss, setNavcss] = useState("activeDay");
  const [attheBottom, setAttheBottom] = useState(false);
  const [problemsBtn, setProblemsBtn] = useState({
    isActive: false,
    css: "w-full md:w-6/12",
  });
  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setNavBack(true);
    } else {
      setNavBack(false);
    }
  };
  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      // you're at the bottom of the page
      console.log("Bottom of page");
      setAttheBottom(true);
    } else {
      setAttheBottom(false);
    }
  };
  window.addEventListener("scroll", changeNavBackground);
  return (
    <GlobalContextProvider.Provider
      value={{
        day,
        setDay,
        navActive,
        navBack,
        navCss,
        problemsBtn,
        setProblemsBtn,
        attheBottom,
        setNavcss,
        setNavActive,
      }}
    >
      {children}
    </GlobalContextProvider.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContextProvider);

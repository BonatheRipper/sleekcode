import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import { useGlobalContext } from "./utils/GlobalContext";
import Navbar from "./components/Navbar";
const App = () => {
  const { day, setDay, navActive, navBack, navCss, setNavActive } =
    useGlobalContext();
  console.log(navBack);
  return (
    <BrowserRouter>
      <Navbar
        day={day}
        css={`
          ${navBack ? navCss : ""}
        `}
        setDay={setDay}
        navActive={navActive}
        setNavActive={setNavActive}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { FcIdea } from "react-icons/fc";
import algoLogo from "../images/algoLogo.png";

const OverViewTopText = () => {
  return (
    <div id="overViewTopText" className="topLogo flex flex-col items-center">
      <img src={algoLogo} alt="algoLogo" className="md:w-28 w-24" />
      <h1 className="py-4 md:text-2xl text-lg">Multiple Algorithm Solutions</h1>
      <p className="md:py-3 md:w-6/12 px-4">
        <span>
          <FcIdea />
        </span>{" "}
        <span>Solutions to </span>
        <a
          className="text-blue-600 italic underline"
          href="https://leetcode.com/problemset/all/"
        >
          Algo problems{" "}
        </a>
        in Javascript, C++, Java, and Python. This repository aims to provide
        code with good readability and consistent style over various topics and
        embraces new standards.
      </p>
    </div>
  );
};

export default OverViewTopText;

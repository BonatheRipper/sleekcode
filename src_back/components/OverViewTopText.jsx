import React from "react";
import { FcIdea } from "react-icons/fc";
import algoLogo from "../images/algoLogo.png";

const OverViewTopText = () => {
  return (
    <div id="overViewTopText" className="topLogo flex flex-col items-center">
      <img
        src={algoLogo}
        alt="algoLogo "
        className="md:w-28 w-24 h-24 md:h-auto rotateOverViewImage  rounded-full "
      />
      <h1 className="py-4 md:text-2xl text-lg Grotesk">
        Multiple Algorithm Solutions
      </h1>
      <p className="md:py-3 md:w-11/12 px-4 md:px-0 ">
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
        in Javascript, C++, Java, and Python. This is/was a personal project to
        help me browse through interviews problmes faster and more efficiently
        as i study to get a job in a big/good company abroad... I hope it also
        help others in future... below you will find Languages we currently have
        solutions to.
      </p>
    </div>
  );
};

export default OverViewTopText;

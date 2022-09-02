import React from "react";

const SolvedCircle = ({
  counter1,
  day,
  cssOne,
  cssTwo,
  cy,
  cx,
  r,
  textCss,
  counter,
  langType,
}) => {
  return (
    <div className="solved flex flex-col justify-center items-center  w-full">
      <div className="Circles relative my-4 px-4 md:mx-8">
        <div
          className={`outerCircle flex items-center justify-center ${cssOne}  rounded-full border    ${
            !day && "!shadow-none border-none  "
          }`}
        >
          <div
            className={`innerCircle ${cssTwo} rounded-full flex justify-center items-center   ${
              !day && "!shadow-none "
            }`}
          >
            <div
              className={`flex justify-center items-center flex-col ${textCss} font-bold`}
            >
              {/* <p>1781/2392</p> */}
              <p>{counter1}</p>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
          className="absolute top-0"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            className={`counter ${counter}`}
            cx={cx}
            cy={cy}
            r={r}
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className=" flex justify-center items-center">{langType}</div>
    </div>
  );
};

export default SolvedCircle;

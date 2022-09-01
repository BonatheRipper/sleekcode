import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { CgDarkMode } from "react-icons/cg";

const DayAndNight = ({ day, setDay }) => {
  return (
    <div
      onClick={() => setDay(!day)}
      className={`${!day ? " bg-gray-600 rounded-full " : ""} text-2xl md:mx-4`}
    >
      {day ? (
        <span>
          <WiDaySunny />
        </span>
      ) : (
        <span className={`${!day ? "text-black" : ""}`}>
          <CgDarkMode />
        </span>
      )}
    </div>
  );
};

export default DayAndNight;

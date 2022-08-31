import React from "react";
import Wave from "react-wavify";

const Homes = () => {
  const style = {
    transform: "rotate(180deg)",
    margin: 0,
    paddin: 0,
  };
  return (
    <div style={style}>
      <Wave
        fill="#1277b0"
        paused={false}
        options={{ height: 80, amplitude: 40, speed: 0.08, points: 4 }}
      />
    </div>
  );
};

export default Homes;

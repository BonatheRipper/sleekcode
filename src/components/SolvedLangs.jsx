import React from "react";

export function LangType1() {
  return (
    <p className="my-2">
      <span className="font-bold ">Total Solved Questions : </span>
      <span className="border px-2 bg-gray-900 rounded-md text-gray-300 text-lg">
        1781/2392
      </span>
    </p>
  );
}
export function LangType2({ icon }) {
  return <span className="text-3xl">{icon}</span>;
}

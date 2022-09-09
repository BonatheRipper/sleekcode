import React from "react";

export function LangType1({ total1, total2 }) {
  return (
    <p className="my-2">
      <span className="font-bold ">Total Solved Questions : </span>
      <span className=" border-x border-red-300 px-4 md:py-1 shadow-lg rounded-md text-gray-500 text-lg">
        1288/2000
      </span>
    </p>
  );
}
export function LangType2({ icon, css }) {
  return <span className={`text-3xl ${css}`}>{icon}</span>;
}

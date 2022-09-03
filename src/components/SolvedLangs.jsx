import React from "react";

export function LangType1({ total1, total2 }) {
  return (
    <p className="my-2">
      <span className="font-bold ">Total Solved Questions : </span>
      <span className="border px-2 bg-gray-900 rounded-md text-gray-300 text-lg">
        {total1}/{total2}
      </span>
    </p>
  );
}
export function LangType2({ icon, css }) {
  return <span className={`text-3xl ${css}`}>{icon}</span>;
}

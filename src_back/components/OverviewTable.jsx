import React from "react";

const OverviewTable = ({ day }) => {
  return (
    <div
      className={`${
        day ? "bg-gray-100 " : "bg-black"
      }  fixed right-0 w-2/12  opacity-100 border-black h-screen top-0 hidden md:flex flex-col justify-center items-center`}
    >
      {" "}
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Hello Nairaland</p>
      <p>Something here later... </p>
      <p>Hello Nairaland</p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Hello Nairaland</p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Hello Nairaland</p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Hello Nairaland</p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Hello Nairaland</p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Something here later... </p>
      <p>Hello Nairaland</p>
      <p>Something here later... </p>
    </div>
  );
};

export default OverviewTable;

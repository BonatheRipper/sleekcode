import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ activeX, setactiveX }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`search   items-center ${
        active
          ? "fixed top-0 w-full bg-gray-800 opacity-100 left-0 z-50 py-2 flex "
          : "flex relative"
      } `}
    >
      <span
        className={`${
          active ? "absolute  text-black duration-300 " : ""
        } md:absolute mx-4 text-xl font-bold md:text-gray-500`}
      >
        <BsSearch />
      </span>
      <input
        type={`search`}
        placeholder="Search solution"
        className={`mr-6 ${
          active ? "flex opacity-100 w-full md:w-6/12" : "hidden"
        } rounded-full py-1 bg-slate-200 md:flex center`}
      />
    </div>
  );
};

export default SearchBar;

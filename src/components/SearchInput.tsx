import React from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <div className="relative flex items-center flex-grow ">
      <span className="absolute left-3">
        <BsSearch />
      </span>

      <input
        type="search"
        placeholder="Search games...."
        className="pl-14 pr-2 rounded-3xl shadow bg-secondary w-full p-2 hover:bg-hover focus:outline-hover focus:bg-primary"
      />
    </div>
  );
}

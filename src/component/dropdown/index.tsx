import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { options } from "./constant";

export function Dropdown() {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className={`drag-handle relative inline-block w-full h-full pt-5 pb-5 ${
        location.pathname === "/" && "bg-red-300"
      } ${location.pathname === "/" ? "cursor-move" : "cursor-default"}`}
    >
      <select
        // disabled
        value={selectedOption}
        onChange={handleChange}
        className="appearance-none w-full h-full bg-white border border-gray-400 hover:border-gray-500 px-4 rounded shadow focus:outline-none focus:shadow-outline"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

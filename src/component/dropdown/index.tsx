import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

export function Dropdown() {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className={`relative inline-block w-64 p-2 ${
        location.pathname === "/" && "bg-red-300"
      }`}
    >
      <select
        // disabled
        value={selectedOption}
        onChange={handleChange}
        className="max-w-xs appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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

import React from "react";
import { useLocation } from "react-router-dom";

export const Button = () => {
  const location = useLocation();
  return (
    <button
      className={`drag-handle w-full h-full bg-yellow-600 text-gray-50 rounded-xl shadow-xl ${
        location.pathname === "/" ? "cursor-move" : "cursor-pointer"
      }`}
    >
      Click
    </button>
  );
};

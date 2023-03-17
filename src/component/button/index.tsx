import React from "react";
import { useLocation } from "react-router-dom";
import { useCssContext } from "../../context";

export const Button = () => {
  const location = useLocation();
  const cssCtx = useCssContext();
  return (
    <button
      onClick={(e) => {
        let data = e.target.classList;
        cssCtx?.setArray(data || []);
      }}
      className={`drag-handle w-full h-full bg-yellow-600 text-gray-50 rounded-xl shadow-xl ${
        location.pathname === "/" ? "cursor-move" : "cursor-pointer"
      }`}
    >
      Click
    </button>
  );
};

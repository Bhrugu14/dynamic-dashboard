import React from "react";
import { useLocation } from "react-router-dom";

export const InputText = () => {
  const location = useLocation();

  return (
    <input
      className={`w-60 py-2 px-2 text-sm rounded-xl ${
        location.pathname === "/" ? "cursor-move" : "cursor-pointer"
      }`}
    />
  );
};

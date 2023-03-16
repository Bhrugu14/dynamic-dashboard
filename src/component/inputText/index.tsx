import React from "react";
import { useLocation } from "react-router-dom";

export const InputText = () => {
  const location = useLocation();

  return (
    <input
      className={`drag-handle w-full h-full rounded-xl bg-slate-50 ${
        location.pathname === "/" ? "cursor-move" : "cursor-pointer"
      }`}
    />
  );
};

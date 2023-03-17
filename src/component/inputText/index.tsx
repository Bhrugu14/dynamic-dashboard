import React from "react";
import { useLocation } from "react-router-dom";
import { useCssContext } from "../../context";

export const InputText = () => {
  const location = useLocation();
  const cssCtx = useCssContext();

  return (
    <input
      onClick={(e) => {
        let data = e.target.classList;
        console.log("TARGET", data);
        cssCtx?.setArray(data || []);
      }}
      className={`drag-handle w-full h-full rounded-xl bg-slate-50 border px-2 py-1 ${
        location.pathname === "/" ? "cursor-move" : "cursor-pointer"
      }`}
    />
  );
};

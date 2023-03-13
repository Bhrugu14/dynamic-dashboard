import React from "react";

interface ButtonProps {
  className?: string;
  description?: string;
  title?: string;
}

export const ComponentButton = ({
  className = "",
  description = "",
  title = "",
}: ButtonProps) => {
  return (
    <button
      className={`flex py-2 pl-2 justify-center-center w-full ${className}`}
    >
      <div className="h-14 w-14 bg-white shadow-xl flex items-center justify-center">
        AA
      </div>
      <div className="py-2 pl-1 flex flex-col flex-1 items-start justify-center">
        <label className="font-FigTree font-bold text-sm">{title}</label>
        <label className="font-FigTree text-xs text-left">{description}</label>
      </div>
    </button>
  );
};

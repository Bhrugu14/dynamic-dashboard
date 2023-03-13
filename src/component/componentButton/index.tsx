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
      key={title}
      className={`flex py-2 pb-3 pl-2 justify-center-center w-full border-b border-slate-400/8 ${className}`}
    >
      <div className="h-14 w-14 bg-white shadow-xl flex items-center justify-center cursor-pointer">
        AA
      </div>
      <div className="py-2 pl-1 flex flex-col flex-1 items-start justify-center cursor-pointer">
        <label className="font-FigTree font-bold text-sm cursor-pointer">
          {title}
        </label>
        <label className="font-FigTree text-xs text-left cursor-pointer">
          {description}
        </label>
      </div>
    </button>
  );
};

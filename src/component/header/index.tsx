import React from "react";
import { Bars3Icon, PlayIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { useRatioContext } from "../../context";

export const Header = () => {
  const navigate = useNavigate();
  const { currentRatio, setCurrentRatio } = useRatioContext();
  const location = useLocation();
  return (
    <header className="flex justify-between w-full items-center bg-slate-50">
      <div className="flex flex-1 bg-slate-50 py-2 px-3 w-[75%]">
        <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        <label className="flex ml-2 font-FigTree font-semibold text-sm text-title">
          {"Design Board"}
        </label>
      </div>
      <div
        className={`flex justify-end w-[25%] ${
          location.pathname === "/" ? "bg-sidebar" : "bg-slate-50"
        } py-2 pr-2`}
      >
        <select
          value={currentRatio + "%"}
          onChange={(e) => {
            setCurrentRatio(e.target.value);
          }}
          className="appearance-none bg-white border mr-3 border-gray-400 hover:border-gray-500 px-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {[100, 75, 50].map((option) => (
            <option key={option} value={option}>
              {option + "%"}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            location.pathname === "/" ? navigate("/preview") : navigate(-1)
          }
          className="bg-indigo-200 px-3 py-1 rounded-sm shadow-md flex text-indigo-700 font-FigTree text-sm items-center"
        >
          {location.pathname === "/" && (
            <PlayIcon
              className="h-4 w-4 mr-1"
              aria-hidden="true"
              fill="#5046E4"
            />
          )}
          {location.pathname === "/" ? "Preview" : "Back"}
        </button>
      </div>
    </header>
  );
};

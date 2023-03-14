import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, PlayIcon } from "@heroicons/react/24/solid";
// import { EditorPicker } from "../screen/editor/editorPicker";

const MainContainer = () => {
  const [isSidebar, setSidebar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex min-h-screen h-full flex-1 max-w-full w-full overflow-x-hidden">
      <div className={`flex flex-col flex-1 min-h-screen h-full w-full`}>
        <header className="flex justify-between w-full items-center">
          <div className="flex flex-1 bg-white py-2 px-3">
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            <label className="flex ml-2 font-FigTree font-semibold text-sm text-title">
              {"Design Board"}
            </label>
          </div>
          <div className="flex justify-end w-[20.4%] bg-sidebar py-2 pr-2">
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
        <Outlet />
      </div>
      {/* <div
        className={`transition-all duration-300 min-w-[70px] flex ${
          isSidebar ? "md:min-w-[250px] md:w-[30vw] w-[100vw]" : "w-[5vw]"
        } bg-red-500`}
      >
        <EditorPicker
          setSidebar={() => {
            console.log("HERE");
            setSidebar(!isSidebar);
          }}
          isSidebar={isSidebar}
        />
      </div> */}
    </div>
  );
};

export default MainContainer;

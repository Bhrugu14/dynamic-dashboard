import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { EditorPicker } from "../screen/editor/editorPicker";

const MainContainer = () => {
  const [isSidebar, setSidebar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex min-h-screen h-full flex-1 max-w-full w-full overflow-x-hidden">
      <div className={`flex flex-col flex-1 min-h-screen h-full w-full`}>
        <header className="App-header flex justify-between px-4">
          <label className="flex flex-1">{""}</label>
          <label className="text-base flex flex-2">{"Zenskar Demo"}</label>
          <div className="flex flex-1 justify-end">
            <button
              onClick={() =>
                location.pathname === "/" ? navigate("/preview") : navigate(-1)
              }
              className="bg-blue-600 text-base px-2 py-1 rounded-md shadow-md flex "
            >
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

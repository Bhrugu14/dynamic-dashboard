import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { EditorPicker } from "../screen/editor/editorPicker";

const MainContainer = () => {
  const [isSidebar, setSidebar] = useState(true);
  return (
    <div className="flex min-h-screen h-full flex-1 max-w-full w-full overflow-x-hidden">
      <div className={`flex flex-col flex-1 min-h-screen h-full w-full`}>
        <header className="App-header">Zenskar Demo</header>
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

import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../component";

const MainContainer = () => {
  return (
    <div className="flex min-h-screen h-full flex-1 max-w-full w-full overflow-x-hidden flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainContainer;

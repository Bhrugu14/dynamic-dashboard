import React from "react";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <header className="App-header">Zenskar Demo</header>
      <Outlet />
    </>
  );
};

export default MainContainer;

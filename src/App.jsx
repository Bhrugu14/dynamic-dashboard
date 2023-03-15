import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import { BoxContextProvider } from "./context";
import "./App.css";

// You can split your components

const App = () => {
  return (
    <div className="App">
      <BoxContextProvider>
        <RouterProvider router={router} />
      </BoxContextProvider>
    </div>
  );
};

export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { BoxContextProvider } from "./context";

// You can split your components
import router from "./router";

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

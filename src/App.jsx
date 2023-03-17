import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import {
  BoxContextProvider,
  CssContextProvider,
  RatioContextProvider,
} from "./context";
import "./App.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

// You can split your components

const App = () => {
  return (
    <div className="App">
      <BoxContextProvider>
        <CssContextProvider>
          <RatioContextProvider>
            <RouterProvider router={router} />
          </RatioContextProvider>
        </CssContextProvider>
      </BoxContextProvider>
    </div>
  );
};

export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

// You can split your components
import router from "./router";

const App = () => {
  return (
    <div className="App">
      {/* Feel free to delete the header */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../container/mainContainer";
import { Editor, ErrorElement, Preview } from "../screen";

const router = createBrowserRouter([
  {
    errorElement: <ErrorElement />,
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Editor />,
      },
      {
        path: "/preview",
        element: <Preview />,
      },
    ],
  },
]);

export default router;

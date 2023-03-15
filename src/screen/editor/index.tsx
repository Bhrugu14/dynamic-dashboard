import React from "react";

import { EditorCanvas } from "./editorCanvas";
import { EditorPicker } from "./editorPicker";
import "./Editor.css";

export const Editor = (props) => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

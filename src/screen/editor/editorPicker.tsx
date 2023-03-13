import React from "react";
import { ComponentButton } from "../../component";

export const EditorPicker = (props) => {
  return (
    <div className="editor-picker">
      {/* <input /> */}
      <ComponentButton
        className="mb-2"
        title="Text Input"
        description="Supports Markdown or HTML."
      />
      <ComponentButton className="mb-2" />
      <ComponentButton className="mb-2" />
    </div>
  );
};

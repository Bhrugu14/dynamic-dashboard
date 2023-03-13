import React from "react";
import { ComponentButton } from "../../component";
import { componentData } from "./constant";

export const EditorPicker = ({ setSidebar, isSidebar }) => {
  return (
    <div className="editor-picker">
      {/* <input /> */}
      <button onClick={() => setSidebar()} className="bg-red-700">
        Hello
      </button>
      {isSidebar &&
        componentData.map((i, k) => (
          <ComponentButton
            className="mb-2"
            title={i.title}
            description={i.description}
          />
        ))}
    </div>
  );
};

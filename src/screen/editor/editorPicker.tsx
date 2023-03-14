import React from "react";
import { ComponentButton } from "../../component";
import { componentData } from "./constant";

export const EditorPicker = () => {
  return (
    <div className="w-4/12 px-4">
      {/* <input /> */}
      {componentData.map((i, k) => (
        <ComponentButton
          key={"com" + k}
          className="mb-2"
          title={i.title}
          description={i.description}
        />
      ))}
    </div>
  );
};

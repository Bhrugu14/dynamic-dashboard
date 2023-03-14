import React from "react";
import { ComponentButton } from "../../component";
import { useBoxContext } from "../../context";
import { getBoxComponents, setBoxComponents } from "../../reduxStore/boxSlices";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { getWithExpiry, setWithExpiry } from "../../utils/storeData";
import { componentData } from "./constant";

export const EditorPicker = () => {
  const boxCtx = useBoxContext();
  const addComponent = (component) => {
    let boxData = getWithExpiry("position");
    if (Array.isArray(boxData)) {
      setWithExpiry("position", [
        ...boxData,
        {
          id: new Date().toDateString(),
          x: 50,
          y: 50,
          data: component,
        },
      ]);
      boxCtx?.setExtra(boxCtx.extra + 1);
    } else {
      setWithExpiry("position", [
        {
          id: new Date().toDateString(),
          x: 50,
          y: 50,
          data: component,
        },
      ]);
      boxCtx?.setExtra(boxCtx.extra + 1);
    }
  };

  return (
    <div className="w-3/12 px-4">
      {/* <input /> */}
      {componentData.map((i, k) => (
        <ComponentButton
          key={"com" + k}
          className="mb-2"
          title={i.title}
          description={i.description}
          addComponent={() => addComponent(i.component)}
        />
      ))}
    </div>
  );
};

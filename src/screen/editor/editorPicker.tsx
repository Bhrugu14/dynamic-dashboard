import React from "react";
import { ComponentButton } from "../../component";
import { useBoxContext } from "../../context";
// import { getBoxComponents, setBoxComponents } from "../../reduxStore/boxSlices";
// import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import {
  deleteStorage,
  getWithExpiry,
  setWithExpiry,
} from "../../utils/storeData";
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

  const onDeleteComponentData = () => {
    deleteStorage("position");
    boxCtx?.setExtra(boxCtx.extra + 1);
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
      <button
        onClick={onDeleteComponentData}
        className="bg-red-600 text-white py-2 w-full rounded-md shadow-xl mt-2"
      >
        Clear All
      </button>
    </div>
  );
};

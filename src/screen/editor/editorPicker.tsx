import React from "react";
import { ComponentButton } from "../../component";
import { getBoxComponents, setBoxComponents } from "../../reduxStore/boxSlices";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { componentData } from "./constant";

export const EditorPicker = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getBoxComponents);
  const addComponent = () => {
    dispatch(
      setBoxComponents([
        ...state.boxes,
        {
          id: new Date().toDateString(),
          x: 50,
          y: 50,
          data: "button",
        },
      ])
    );
  };
  return (
    <div className="w-4/12 px-4">
      {/* <input /> */}
      {componentData.map((i, k) => (
        <ComponentButton
          key={"com" + k}
          className="mb-2"
          title={i.title}
          description={i.description}
          addComponent={addComponent}
        />
      ))}
    </div>
  );
};

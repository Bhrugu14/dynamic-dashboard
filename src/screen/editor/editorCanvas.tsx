// import { loadPlugin } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
// import Draggable from "react-draggable";
import { DragBox } from "../../component";
import { getBoxComponents, setBoxComponents } from "../../reduxStore/boxSlices";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";

export const EditorCanvas = (props) => {
  const state = useAppSelector(getBoxComponents);
  const dispatch = useAppDispatch();
  const [boxes, setBoxes] = useState([
    {
      id: new Date().toString(),
      x: 50,
      y: 50,
      data: "button",
    },
  ]);
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    console.log("state", state);
    if (state.boxes.length > 0) {
      const savedPosition = state.boxes || null;
      console.log("savedPosition", savedPosition);

      if (savedPosition) {
        setBoxes(savedPosition);
      } else {
        setBoxes([
          {
            id: new Date().toDateString(),
            x: 50,
            y: 50,
            data: "button",
          },
        ]);
      }
    }
  }, []);

  return (
    <div className="relative h-full w-8/12 float-left">
      <div className="h-full w-full bg-background">
        {boxes.map((box, k) => (
          <DragBox
            key={box.id}
            x={box.x}
            y={box.y}
            onStop={(e, { x, y }) => {
              boxes[k].x = x;
              boxes[k].y = y;
              setBoxes(boxes);
              console.log("BOXES", boxes);
              dispatch(setBoxComponents(boxes));
              setExtra(extra + 1);
            }}
            component={box.data}
          />
        ))}
      </div>
    </div>
  );
};

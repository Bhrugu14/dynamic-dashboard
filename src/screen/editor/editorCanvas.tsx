import React, { useEffect, useState } from "react";
import { DragBox } from "../../component";
import { getWithExpiry, setWithExpiry } from "../../utils/storeData";

export const EditorCanvas = (props) => {
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
    let boxesData = getWithExpiry("position");
    if (Array.isArray(boxesData)) {
      const savedPosition = boxesData || null;
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
  }, [getWithExpiry("position")]);

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
              setWithExpiry("position", boxes);
              // dispatch(setBoxComponents(boxes));
              setExtra(extra + 1);
            }}
            component={box.data}
          />
        ))}
      </div>
    </div>
  );
};

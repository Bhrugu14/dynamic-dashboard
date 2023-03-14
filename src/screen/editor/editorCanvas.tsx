import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { DragBox } from "../../component";

export const EditorCanvas = (props) => {
  const [boxes, setBoxes] = useState([
    { id: new Date().toString(), x: 50, y: 50 },
  ]);
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("position")) {
      const savedPosition = JSON.parse(localStorage.getItem("position") || "");
      console.log("savedPosition", savedPosition);

      if (savedPosition) {
        setBoxes(savedPosition);
      } else {
        setBoxes([{ id: new Date().toDateString(), x: 50, y: 50 }]);
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
              localStorage.setItem(
                "position",
                JSON.stringify([{ x: x, y: y }])
              );
              boxes[k].x = x;
              boxes[k].y = y;
              setBoxes(boxes);
              setExtra(extra + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

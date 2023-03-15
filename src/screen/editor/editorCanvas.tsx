import React, { useEffect, useState } from "react";

import { DragBox } from "../../component";
import { useBoxContext } from "../../context";
import { getWithExpiry, setWithExpiry } from "../../utils/storeData";

interface BoxesProps {
  x?: number;
  y?: number;
  data?: any;
}

export const EditorCanvas = (props) => {
  const boxCtx = useBoxContext();
  const [boxes, setBoxes] = useState<BoxesProps[] | any>([]);
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    let boxesData = getWithExpiry("position");
    if (Array.isArray(boxesData)) {
      const savedPosition = boxesData || null;
      console.log("savedPosition", savedPosition);
      if (savedPosition) {
        setBoxes(savedPosition);
        setExtra(extra + 1);
      }
    } else {
      setBoxes([]);
      setExtra(extra + 1);
    }
  }, [boxCtx?.extra]);

  return (
    <div className="relative h-full w-[75%]">
      <div className="h-full w-full bg-background">
        {boxes.length > 0 &&
          boxes.map((box, k) => (
            <DragBox
              key={"preview" + box.id + k}
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

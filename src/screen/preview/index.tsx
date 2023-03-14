import React, { useEffect, useState } from "react";
import { DragBox } from "../../component";
import { getWithExpiry } from "../../utils/storeData";
interface BoxesProps {
  x?: number;
  y?: number;
  data?: any;
}

export const Preview = (props) => {
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
  }, []);

  return (
    <div className="relative h-full w-screen">
      <div className="h-full w-full bg-background">
        {boxes.map((box, k) => (
          <DragBox
            disabled
            key={"preview" + box.id + k}
            x={box.x}
            y={box.y}
            component={box.data}
          />
        ))}
      </div>
    </div>
  );
};

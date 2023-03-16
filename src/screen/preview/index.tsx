import React, { useEffect, useState } from "react";

import { DragBox } from "../../component";
import { getWithExpiry } from "../../utils/storeData";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);
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
      <div className="h-full w-full bg-white">
        <ResponsiveGridLayout
          className="absolute w-full h-full"
          layouts={{ lg: boxes }}
          // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          rowHeight={30}
          width={1200}
          isDraggable={false}
          isResizable={false}
          // onLayoutChange={() => {}}
          verticalCompact={false}
        >
          {boxes.map((item, k) => (
            <div key={item.i}>
              <DragBox component={item.i} />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

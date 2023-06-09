import React, { useEffect, useState } from "react";

import { DragBox } from "../../component";
import { useBoxContext, useCssContext, useRatioContext } from "../../context";
import { getWithExpiry, setWithExpiry } from "../../utils/storeData";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);
interface BoxesProps {
  x?: number;
  y?: number;
  data?: any;
  id?: string;
  i?: string;
}

export const EditorCanvas = () => {
  const boxCtx = useBoxContext();
  const { currentRatio } = useRatioContext();
  const cssCtx = useCssContext();
  const [boxes, setBoxes] = useState<BoxesProps[] | any>([]);
  const [showGrid, setShowGrid] = useState(false);
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
    <div className={`relative h-full w-[75%] overflow-auto flex`}>
      <div className={`w-[75%] h-full fixed bg-background`}>
        {showGrid && (
          <div
            className={`absolute h-[94%] w-full flex bg-background p-[7.83px]`}
          >
            {[...Array(12)].map((i, k) => {
              return (
                <div
                  key={"arry" + k}
                  className="flex flex-col flex-1 border-green-700"
                >
                  {[...Array(40)].map((i, j) => {
                    return (
                      <div
                        key={"array" + j}
                        className="border-[0.5px] flex flex-1 border-black/5"
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
        <div
          className={`flex items-center justify-center absolute w-full h-full`}
        >
          <label className="text-opacity-20 text-slate-500 font-extrabold text-[1.5vw] font-FigTree">
            click on components to add here
          </label>
        </div>
        <ResponsiveGridLayout
          className={`absolute w-full h-full`}
          layouts={{ lg: boxes }}
          isDroppable={true}
          onDrop={(layout: any, layoutItem: any, _event: any) => {
            console.log("ONDROP_IN_layout", layout);
            setWithExpiry("position", layout);
          }}
          onDragStart={() => setShowGrid(true)}
          onDragStop={() => setShowGrid(false)}
          onResizeStart={() => setShowGrid(true)}
          onResizeStop={() => setShowGrid(false)}
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          rowHeight={32}
          width={1200}
          onLayoutChange={(newLayout: { x: number; y: number }[]) => {
            if (newLayout.length > 0) {
              let newData = [];
              newLayout.map((i: { x: number; y: number }) => {
                if (i.x >= 12) {
                  i.x = 12;
                }
                if (i.y >= 17) {
                  i.y = 17;
                }
                newData.push(i);
                return i;
              });
              setBoxes(newData);
              setWithExpiry("position", newData);
            }
          }}
          verticalCompact={false}
          horizontalCompact={false}
          isBounded={false}
          isDraggable={cssCtx.isStyleView}
          isResizable={cssCtx.isStyleView}
          draggableHandle=".drag-handle"
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

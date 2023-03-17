import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { ComponentButton } from "../../component";
import { useBoxContext, useCssContext } from "../../context";
import { componentData } from "./constant";
import {
  deleteStorage,
  getWithExpiry,
  setWithExpiry,
} from "../../utils/storeData";
import { getConvertedClasses } from "../../utils/healper";

const defaultItem = {
  id: new Date().getTime().toString(),
  x: 0,
  y: 0,
  h: 2,
  w: 2,
};

export const EditorPicker = () => {
  const [searchText, setSearchText] = useState<string>("");
  const boxCtx = useBoxContext();
  const cssCtx = useCssContext();

  const [isChangeView, changeView] = useState(false);

  // useEffect(() => {
  //   cssCtx?.cssArray.forEach((i, k) => console.log(getConvertedClasses(i)));
  // }, [cssCtx]);

  const addComponent = (component: string, h, w) => {
    let boxData = getWithExpiry("position");
    if (Array.isArray(boxData)) {
      let data = boxData.filter((i) => i.i.includes(component));
      setWithExpiry("position", [
        ...boxData,
        {
          ...defaultItem,
          data: component,
          i: component + "" + data.length,
          h: h,
          w: w,
        },
      ]);
      boxCtx?.setExtra(boxCtx.extra + 1);
    } else {
      setWithExpiry("position", [
        { ...defaultItem, data: component, i: component },
      ]);
      boxCtx?.setExtra(boxCtx.extra + 1);
    }
  };

  const onDeleteComponentData = () => {
    deleteStorage("position");
    boxCtx?.setExtra(boxCtx.extra + 1);
  };

  const onDragEnd = (e) => {
    addComponent(e.target.id, 3, 3);
    // setTimeout(() => {
    //   let boxData = getWithExpiry("position");
    //   console.log("postion", boxData);

    //   if (Array.isArray(boxData)) {
    //     let data = boxData.filter((i) => i.i.includes(e.target.id));
    //     boxData[boxData.length - 1].i = e.target.id + "" + data.length;
    //     setWithExpiry("position", boxData);
    //     boxCtx?.setExtra(boxCtx.extra + 1);
    //   } else {
    //     // boxData[0].i = e.target.id;
    //     setWithExpiry("position", [
    //       { ...defaultItem, data: e.target.id, i: e.target.id },
    //     ]);
    //     boxCtx?.setExtra(boxCtx.extra + 1);
    //   }
    // }, 0);
    // elements[elements.length - 1].i = e.target.id;
    // setWithExpiry("position", elements);
    // boxCtx?.setExtra(boxCtx.extra + 1);
  };

  return (
    <div className="w-[25%] pl-4 bg-sidebar flex">
      {!isChangeView ? (
        <div className="flex flex-col flex-1">
          <div className="flex border border-dim/1 rounded-sm items-center mt-10 bg-white py-2 px-2">
            <MagnifyingGlassIcon
              className="h-5 w-5 mr-1"
              aria-hidden="true"
              fill="black"
            />
            <input
              className="bg-white text-sm text-title w-full"
              placeholder="Search Component"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <label className="font-FigTree text-sm text-dim font-semibold text-right w-full flex mt-6 mb-3">
            Components
          </label>
          {componentData.map((i, k) => {
            if (!i.title.includes(searchText)) {
              return null;
            }
            return (
              <ComponentButton
                key={"com" + k}
                className="mb-2"
                title={i.title}
                description={i.description}
                addComponent={() => addComponent(i.component, i.h, i.w)}
                icon={i.icon}
                onDragEnd={(e) => addComponent(e.target.id, i.h, i.w)}
                component={i.component}
              />
            );
          })}
          <button
            onClick={onDeleteComponentData}
            className="bg-red-600 text-white py-2 w-full rounded-md shadow-xl mt-2"
          >
            Clear Canvas
          </button>
        </div>
      ) : (
        <div className="flex flex-col flex-1 items-start mt-10">
          <label className="font-FigTree text-base font-bold text-title">
            {"Css "}
            <span className="font-normal text-black/60">
              {"(click on component)"}
            </span>
          </label>
          <div className="flex flex-col items-start bg-slate-200 w-full px-2 py-1">
            {cssCtx?.cssArray &&
              cssCtx?.cssArray.map((i, k) => {
                let cssData = getConvertedClasses(i);
                let index = cssData.indexOf(":");
                return (
                  <label
                    key={"css" + k}
                    className="font-FigTree text-orange-600 font-base"
                  >
                    {cssData.substring(0, index + 1)}
                    <span className="text-black">
                      {cssData.substring(index + 1)}
                    </span>
                  </label>
                );
              })}
          </div>
        </div>
      )}
      <div className="flex justify-center mt-10 mx-2 px-1 border-l ">
        <label
          className="font-FigTree text-base h-7 rounded-md flex items-center w-full font-bold bg-background cursor-pointer"
          onClick={() => {
            cssCtx?.setStyleView(!cssCtx.isStyleView);
            changeView(!isChangeView);
          }}
        >
          {"</>"}
        </label>
      </div>
    </div>
  );
};

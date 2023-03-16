import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { ComponentButton } from "../../component";
import { useBoxContext } from "../../context";
import { componentData } from "./constant";
import {
  deleteStorage,
  getWithExpiry,
  setWithExpiry,
} from "../../utils/storeData";

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

  const addComponent = (component: string) => {
    let boxData = getWithExpiry("position");
    if (Array.isArray(boxData)) {
      let data = boxData.filter((i) => i.i.includes(component));
      setWithExpiry("position", [
        ...boxData,
        { ...defaultItem, data: component, i: component + "" + data.length },
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

  return (
    <div className="w-[25%] px-4 bg-sidebar">
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
            addComponent={() => addComponent(i.component)}
            icon={i.icon}
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
  );
};

import React, { useEffect } from "react";
import { useState } from "react";
import Draggable from "react-draggable";

interface DragBoxProps {
  x: number;
  y: number;
  onStop: (
    e: any,
    {
      x,
      y,
    }: {
      x: any;
      y: any;
    }
  ) => void;
  key?: any;
  component: any;
}

export function DragBox(props: DragBoxProps) {
  let boxComp =
    props.component === "button" ? (
      <button className="px-10 py-3 bg-yellow-600 text-gray-50 rounded-xl shadow-xl">
        NAME
      </button>
    ) : props.component === "textInput" ? (
      <div className="p-1 px-1 py-1 bg-blue-300 rounded-xl">
        <input className="w-48 py-2 px-2 text-sm rounded-xl" />
      </div>
    ) : (
      <div className="h-10 w-10 bg-red-500" />
    );
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
      position={{ x: props.x, y: props.y }}
      onStop={props.onStop}
    >
      {boxComp}
    </Draggable>
  );
}

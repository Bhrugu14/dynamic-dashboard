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
      <button className="w-60 h-20 bg-black">NAME</button>
    ) : (
      <div />
    );
  return (
    <Draggable
      bounds="parent"
      position={{ x: props.x, y: props.y }}
      onStop={props.onStop}
    >
      {boxComp}
    </Draggable>
  );
}

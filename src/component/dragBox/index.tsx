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
}

export function DragBox(props: DragBoxProps) {
  return (
    <Draggable
      bounds="parent"
      position={{ x: props.x, y: props.y }}
      onStop={props.onStop}
    >
      <div className="w-40 h-40 bg-blue-500 rounded-lg shadow-lg"></div>
    </Draggable>
  );
}

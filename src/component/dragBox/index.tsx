import React from "react";
import Draggable from "react-draggable";

import { Button } from "../button";
import { InputText } from "../inputText";
import { Dropdown } from "../dropdown";
import { Table } from "../table";

interface DragBoxProps {
  x: number;
  y: number;
  onStop?: (
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
  disabled?: boolean;
}

export function DragBox(props: DragBoxProps) {
  let boxComp =
    props.component === "button"
      ? Button()
      : props.component === "textInput"
      ? InputText()
      : props.component === "dropdown"
      ? Dropdown()
      : Table();
  return (
    <Draggable
      disabled={props.disabled || false}
      bounds="parent"
      position={{ x: props.x, y: props.y }}
      onStop={props.onStop}
    >
      {boxComp}
    </Draggable>
  );
}

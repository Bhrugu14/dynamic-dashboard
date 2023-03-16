import React from "react";

import { Button } from "../button";
import { InputText } from "../inputText";
import { Dropdown } from "../dropdown";
import { Table } from "../table";

interface DragBoxProps {
  component: any;
}

export function DragBox(props: DragBoxProps) {
  const BoxComp = () =>
    props.component.includes("button") ? (
      <Button />
    ) : props.component.includes("textInput") ? (
      <InputText />
    ) : props.component.includes("dropdown") ? (
      <Dropdown />
    ) : (
      <Table />
    );
  return <BoxComp />;
}

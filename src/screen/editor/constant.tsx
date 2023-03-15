import React from "react";
import { ChevronDownIcon, TableCellsIcon } from "@heroicons/react/24/solid";

const Action = () => {
  return (
    <label className="bg-indigo-700 text-white text-[6px] font-semibold px-1 py-1 rounded-sm">
      ACTION
    </label>
  );
};

const TextInput = () => {
  return (
    <label className=" text-black text-base font-semibold px-1 rounded-sm">
      Aa
    </label>
  );
};

const Drop = () => {
  return (
    <label className="bg-black rounded-sm">
      <ChevronDownIcon
        className="h-5 w-5 p-1"
        aria-hidden="true"
        fill="white"
      />
    </label>
  );
};

const IcTable = () => {
  return <TableCellsIcon className="h-6 w-6" aria-hidden="true" fill="black" />;
};

export const componentData = [
  {
    title: "Text Input",
    description: "Supports Markdown or HTML.",
    component: "textInput",
    icon: <TextInput />,
  },
  {
    title: "Button",
    description: "Trigger actions like run queries, export data etc.",
    component: "button",
    icon: <Action />,
  },
  {
    title: "Dropdown",
    description: "Select from a set of options, with a dropdown.",
    component: "dropdown",
    icon: <Drop />,
  },
  {
    title: "Table",
    description: "Display tabular data with pagination.",
    component: "table",
    icon: <IcTable />,
  },
];

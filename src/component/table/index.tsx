import React from "react";
import { useLocation } from "react-router-dom";

import { data } from "./constant";

export function Table() {
  const location = useLocation();
  return (
    <button
      className={`w-full h-full drag-handle ${
        location.pathname === "/" ? "cursor-move" : "cursor-pointer"
      }`}
    >
      <table
        className={`whitespace-nowrap w-full h-full overflow-x-auto bg-white ${
          location.pathname === "/" ? "cursor-move" : "cursor-default"
        }`}
      >
        <thead>
          <tr className="font-bold text-left">
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3">Email</th>
            <th className="px-3 py-3">Phone</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((i, k) => (
            <tr key={"table" + k}>
              <td className="px-3 py-2 whitespace-nowrap">{i.name}</td>
              <td className="px-3 py-2 whitespace-nowrap">{i.email}</td>
              <td className="px-3 py-2 whitespace-nowrap">{i.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </button>
  );
}

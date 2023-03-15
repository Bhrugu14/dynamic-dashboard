import React from "react";

import { data } from "./constant";

export function Table() {
  return (
    <button className="cursor-default">
      <table className="w-52 whitespace-nowrap max-w-sm overflow-x-auto bg-white">
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

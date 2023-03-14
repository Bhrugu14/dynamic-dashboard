import React from "react";

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
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">John Smith</td>
            <td className="px-3 py-2 whitespace-nowrap">
              john.smith@example.com
            </td>
            <td className="px-3 py-2 whitespace-nowrap">(123) 456-7890</td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">Jane Doe</td>
            <td className="px-3 py-2 whitespace-nowrap">
              jane.doe@example.com
            </td>
            <td className="px-3 py-2 whitespace-nowrap">(555) 123-4567</td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">Bob Johnson</td>
            <td className="px-3 py-2 whitespace-nowrap">
              bob.johnson@example.com
            </td>
            <td className="px-3 py-2 whitespace-nowrap">(999) 555-1212</td>
          </tr>
        </tbody>
      </table>
    </button>
  );
}

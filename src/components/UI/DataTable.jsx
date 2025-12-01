import React from "react";

export default function DataTable({
                                      columns = [],
                                      data = [],
                                      headerBg = "#F9FAFB",
                                  }) {
    return (
        <div className="mt-4 w-full overflow-x-auto bg-white rounded-lg">
            <div className="min-w-[800px]">
                <table className="w-full text-sm font-sans">
                    <thead style={{ backgroundColor: headerBg }}>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className="px-3 py-3 text-left font-semibold text-gray-700 whitespace-nowrap lg:px-4"
                            >
                                <div className="truncate">
                                    {col.label}
                                </div>
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody className="border border-gray-200 divide-y divide-gray-100">
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className=""
                        >
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className="px-3 py-3 border border-gray-100 whitespace-nowrap text-gray-700 lg:px-4 hover:bg-gray-50 transition "
                                >
                                    <div className="truncate max-w-[200px]">
                                        {col.render
                                            ? col.render(row[col.key], row)
                                            : row[col.key]}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
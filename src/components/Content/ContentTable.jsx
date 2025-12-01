import React from "react";
import DataTable from "../UI/DataTable";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function ContentTable({ contents = [] }) {
    const [activeFilter, setActiveFilter] = React.useState("All");
    const filters = ["All", "Status", "Content Type"];

    const statusStyles = {
        pending: { color: "#D97706", dot: "bg-yellow-400" },
        submitted: { color: "#059669", dot: "bg-green-500" },
        late: { color: "#DC2626", dot: "bg-red-600" },
    };

    const columns = [
        { key: "type", label: "Content Type" },
        { key: "user", label: "Submitted By" },
        {
            key: "status",
            label: "Status",
            render: (value) => (
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${statusStyles[value].dot}`}></span>
                    <span style={{ color: statusStyles[value].color }} className="capitalize font-medium">
                        {value}
                    </span>
                </div>
            ),
        },
        {
            key: "date",
            label: "Submission Date",
            render: (value) => (
                <div className="flex items-center gap-2 text-gray-700">
                    <MdOutlineCalendarToday className="text-gray-600" />
                    {value}
                </div>
            ),
        },
        {
            key: "report",
            label: "Report",
            render: (value) =>
                value === "Not Found" ? (
                    <span className="text-gray-400">Not Found</span>
                ) : (
                    <div className="text-gray-700 flex gap-1 cursor-pointer">
                        <svg className="relative top-1" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path
                                d="M7.09539 3.58731L4.0641 6.55923..."
                                stroke="#707070"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {value}
                    </div>
                ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (_, row) => (
                <div className="flex gap-3 flex-wrap">
                    {row.status === "late" && (
                        <span className="text-red-600 font-semibold cursor-pointer">Send Reminder</span>
                    )}
                    <span className="text-green-600 font-semibold cursor-pointer">Approve</span>
                    <span className="text-gray-600 font-semibold cursor-pointer">Request Revision</span>
                </div>
            ),
        },
    ];

    return (
        <div className="overflow-x-auto">
            <div className="flex gap-3 mt-6 ">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-4 py-1 rounded-md text-sm font-semibold transition
                            ${activeFilter === filter
                            ? "bg-purple-200 text-purple-900"
                            : "bg-gray-100 text-gray-600"
                        }
                        `}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <DataTable columns={columns} data={contents} headerBg="#faf6ff" />
        </div>
    );
}

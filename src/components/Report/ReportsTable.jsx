import React from "react";
import DataTable from "../UI/DataTable";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function ReportsTable({ reports = [] }) {
    const statusStyles = {
        pending: { color: "#D97706", dot: "bg-yellow-400" },
        submitted: { color: "#059669", dot: "bg-green-500" },
        late: { color: "#DC2626", dot: "bg-red-600" },
    };

    const columns = [
        {
            key: "title",
            label: "Report Title",
        },
        {
            key: "user",
            label: "Submitted By",
        },
        {
            key: "status",
            label: "Status",
            render: (value) => (
                <div className="flex items-center gap-2">
                    <span
                        className={`w-2 h-2 rounded-full ${statusStyles[value].dot}`}
                    ></span>
                    <span
                        style={{ color: statusStyles[value].color }}
                        className="capitalize font-medium"
                    >
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
                    <div className="text-gray-700 flex gap-1  cursor-pointer">
                        <svg className={'relative top-1'} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.09539 3.58731L4.0641 6.55923C3.77593 6.84423 3.6176 7.23373 3.62393 7.64302C3.63257 8.05707 3.80309 8.45126 4.09893 8.74107C4.39581 9.03477 4.7956 9.2034 5.20964 9.21052C5.41233 9.21479 5.61382 9.17846 5.80226 9.10369C5.9907 9.02891 6.16228 8.91719 6.30689 8.77511L9.33739 5.80319C9.62329 5.52035 9.84875 5.18238 10.0001 4.80977C10.1514 4.43717 10.2255 4.0377 10.2177 3.63561C10.2011 2.80746 9.8606 2.0188 9.26931 1.43873C8.67638 0.851992 7.88032 0.516049 7.04631 0.500607C6.64136 0.492525 6.23887 0.565233 5.86235 0.714483C5.48582 0.863733 5.14282 1.08653 4.85339 1.36986L1.82051 4.34257C1.39199 4.76702 1.05407 5.27404 0.82723 5.83292C0.600387 6.39179 0.489337 6.99089 0.500806 7.59394C0.526299 8.83586 1.03728 10.0184 1.92422 10.8881C2.81315 11.7679 4.00661 12.272 5.25714 12.2956C5.86479 12.3083 6.46886 12.1996 7.03396 11.9758C7.59906 11.7521 8.11383 11.4178 8.5481 10.9926L11.5794 8.01907" stroke="#707070" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {value}
                    </div>
                ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (_, row) =>
                row.status === "late" ? (
                    <span className="text-red-600 font-semibold  cursor-pointer">
                        Send Reminder
                    </span>
                ) : (
                    <div className="flex gap-4">
                        <span className="text-green-600 font-semibold   cursor-pointer">
                            Approve
                        </span>
                        <span className="text-gray-600  font-semibold  cursor-pointer">
                            Request Revision
                        </span>
                    </div>
                ),
        },
    ];

    return (
        <div className="">
            <DataTable
                columns={columns}
                data={reports}
                headerBg="#ffedee"
            />
        </div>
    );
}
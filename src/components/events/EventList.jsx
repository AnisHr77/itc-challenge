import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function EventList({ additionalEvents = [] }) {
    const baseEvents = Array.from({ length: 12 }).map((_, index) => ({
        id: index + 1,
        name: "Event Name",
        type: "Event Type",
        date: "Oct 22, 2024",
        attendees: 12,
        Actions: "View Details",
    }));

    const events = [...baseEvents, ...additionalEvents];

    return (
        <div className="py-10 w-full bg-white rounded-lg ">
            <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900">Workshops History</h2>
            </div>

            <div className="overflow-x-auto border-none  rounded-lg font-sans">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#FFF6EE] border-none">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm  text-gray-900 ">
                            Event Name
                        </th>
                        <th className="px-5 py-3 text-left text-sm  text-gray-900  ">
                            Type
                        </th>
                        <th className="px-5 py-3 text-left text-sm  text-gray-900  ">
                            Date
                        </th>
                        <th className="px-8 py-2 text-left text-sm  text-gray-900  ">
                            Attendees
                        </th>
                        <th className="px-5 py-3 text-left text-sm  text-gray-900  ">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white border-2 border-gray-100 divide-y divide-gray-200">
                    {events.map((event) => (
                        <tr key={event.id} className="hover:bg-gray-50 transition-colors duration-150">
                            <td className="px-8 py-3 whitespace-nowrap  border-2 border-gray-100">
                                <div className="relative right-2 flex  text-start items-start">
                                    <div className="text-sm text-start justify-start font-bold text-gray-900">
                                        {event.name}
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap border-2 border-gray-100 ">
                                <div className="text-sm text-start justify-start font-medium text-gray-900">
                                    {event.type}
                                </div>
                            </td>
                            <td className="px-5 py-3 whitespace-nowrap border-2 border-gray-100">
                                <div className="flex gap-1 items-center text-sm text-gray-900">
                                    <MdOutlineCalendarToday />
                                    {event.date}
                                </div>
                            </td>
                            <td className="px-6 py-3 whitespace-nowrap border-2 border-gray-100">
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-gray-600">
                                        {event.attendees.toLocaleString()}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-3  text-underlined whitespace-nowrap text-sm font-medium"
                                style={{textDecoration:'underline'}}>
                                {event.Actions}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
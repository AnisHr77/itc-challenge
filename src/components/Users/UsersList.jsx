import React, { useState } from "react";

const initialUsers = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    member: "Member's Name",
    role: index % 4 === 0
        ? "Leader"
        : index % 4 === 1
            ? "Co Leader"
            : index % 4 === 2
            ? "SG" :"Member",
    level: `Level ${index + 1}`,
    lastActive: `Oct ${10 + index}, 2024`,
    actions: "View Profile",
}));

export default function UsersList({ additionalMembers = [] }) {
    const [users, setUsers] = useState(initialUsers);

    const allUsers = [...users, ...additionalMembers];

    return (
        <div className="py-2 w-full bg-white rounded-lg">
            <div className="overflow-x-auto border-none rounded-lg font-sans">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F3F8FF] border-none">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm text-gray-900">Member</th>
                        <th className="px-5 py-3 text-left text-sm text-gray-900">Role</th>
                        <th className="px-5 py-3 text-left text-sm text-gray-900">Level</th>
                        <th className="px-8 py-2 text-left text-sm text-gray-900">Last Active</th>
                        <th className="px-5 py-3 text-left text-sm text-gray-900">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white border-2 border-gray-100 divide-y divide-gray-200">
                    {allUsers.map((user) => (
                        <tr
                            key={user.id}
                            className="hover:bg-gray-50 transition-colors duration-150"
                        >
                            <td className="px-6 py-3 whitespace-nowrap border-2 border-gray-100">
                                <div className="text-sm font-bold text-gray-900">{user.member}</div>
                            </td>
                            <td className="px-5 py-3 whitespace-nowrap border-2 border-gray-100">
                                <div className="text-sm  text-gray-900">{user.role}</div>
                            </td>
                            <td className="px-5 py-3 whitespace-nowrap border-2 border-gray-100">
                                <div className="text-sm  text-gray-600">{user.level}</div>
                            </td>
                            <td className="px-8 py-3 whitespace-nowrap border-2 border-gray-100">
                                <div className="text-sm text-gray-600">{user.lastActive}</div>
                            </td>
                            <td
                                className="px-6 py-3 text-underlined whitespace-nowrap text-sm font-medium"
                            >
                                <div className="flex justify-between items-center gap-4">

                                    <div className="underline">
                                        {user.actions}
                                    </div>

                                    <div className="w-px h-4 bg-gray-300"></div>

                                    <div className="text-red-700 underline cursor-pointer">
                                        Remove
                                    </div>

                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
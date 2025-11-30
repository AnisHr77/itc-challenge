import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdOutlineEvent } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

const ManagementHub = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: "Manage Team",
            icon: <FaUsers size={18} />,
            bg: "#F3F8FF",
            shadow: "#C3D9FF",
            path: "/manage-team"
        },
        {
            label: "Manage Events",
            icon: <MdOutlineEvent size={18} />,
            bg: "#FFF6EE",
            shadow: "#FFD1AB",
            path: "/events"
        },
        {
            label: "Manage Reports",
            icon: <BiSolidReport size={18} />,
            bg: "#FFEDEE",
            shadow: "#FFA9AB",
            path: "/manage-reports"
        },
        {
            label: "Manage Content",
            icon: <FiFileText size={18} />,
            bg: "#FAF6FF",
            shadow: "#E1C9FF",
            path: "/manage-content"
        },
    ];

    const handleItemClick = (path) => {
        navigate(path);
    };

    return (
        <div className="w-full mt-5">
            <h2 className="text-lg font-semibold mb-1">Management Hub</h2>

            <div className="flex flex-col gap-1">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="py-1"
                        onClick={() => handleItemClick(item.path)}
                    >
                        <div
                            className="flex items-center gap-2 px-3 py-3 rounded-lg cursor-pointer transition"
                            style={{
                                boxShadow: `1px 1px 5px rgba(0,0,0,0.05), -2px 0 0px ${item.shadow}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `1px 2px 8px rgba(0,0,0,0.10), -2px 0 0px ${item.shadow}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = `1px 1px 5px rgba(0,0,0,0.05), -2px 0 0px ${item.shadow}`;
                            }}
                        >
                            <div
                                className="w-10 h-8 rounded-full flex items-center justify-center shadow-sm"
                                style={{ backgroundColor: item.shadow }}
                            >
                                {item.icon}
                            </div>
                            <div
                                className="items-center text-center mx-auto rounded-md justify-center w-full p-2 font-medium"
                                style={{ backgroundColor: item.bg }}
                            >
                                <p className="text-xs font-semibold">{item.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagementHub;
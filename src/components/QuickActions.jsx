import React from "react";
import { FiPlus } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";

const iconMap = {
    FiPlus: <FiPlus size={16} />,
    LuUpload: <LuUpload size={16} />,
};

const QuickActions = ({ data = [] }) => {
    if (!data.length) return null;

    return (
        <div className="w-full mt-5">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>

            <div
                className="flex text-center justify-between items-center gap-1
                   overflow-x-auto sm:overflow-x-visible
                   -ms-overflow-style-none scrollbar-none"
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center text-center gap-4 px-10 py-3 rounded-lg cursor-pointer transition transform hover:scale-105"
                        style={{
                            backgroundColor: item.bg,
                            boxShadow: `0px 3px 0px ${item.shadow}`,
                        }}
                    >
                        <span className="font-bold">{iconMap[item.icon]}</span>
                        <p className="font-bold text-sm">{item.label}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .scrollbar-none::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-none {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default QuickActions;

import React from "react";
import { FiPlus } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

const iconMap = {
    FiPlus: <FiPlus size={16} />,
    LuUpload: <LuUpload size={16} />,
};

const Action = ({ data = [] }) => {
    const navigate = useNavigate();
    const location = useLocation();


    console.log('Action component data:', data);

    if (!data.length) return null;

    const handleClick = (item) => {
        console.log('Clicked item:', item);
        console.log('Action type:', item.actionType);

        if (item.actionType) {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set('action', item.actionType);
            const newUrl = `${location.pathname}?${searchParams.toString()}`;
            console.log('Navigating to:', newUrl);
            navigate(newUrl, { replace: true });
        } else {
            console.error('No actionType found in item:', item);
        }
    };


    return (
        <div className="w-full mt-5">
            <div className="flex w-full gap-4 scrollbar-none">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[120px] flex-1 flex justify-center items-center gap-2 py-3 rounded-xl cursor-pointer transition transform hover:scale-105"
                        style={{
                            backgroundColor: item.bg,
                            boxShadow: `0px 3px 0px ${item.shadow}, 2px  2px 8px 0px rgba(243, 244, 246, 1), 2px  2px 8px 0px rgba(243, 244, 246, 1)`,
                        }}
                        onClick={() => handleClick(item)}
                    >
                        <span className="font-extrabold">{iconMap[item.icon]}</span>
                        <p className="font-extrabold text-[15px]">{item.label}</p>
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

export default Action;
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { MdInfoOutline } from "react-icons/md";
import { useEffect, useState } from "react";

const WorkShops = ({ item, index = 0 }) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimated(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className=" font-sans w-full max-w-sm py-4 px-4 rounded-md transition-all duration-500"
            style={{
                backgroundColor: item.bgColor,
                boxShadow: item.shadow,
                transform: animated ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(-10px)',
                opacity: animated ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
            }}
        >

            <h3
                className="text-[13px] font-bold mb-2"
                style={{ color: item.titleColor }}
            >
                {item.title}
            </h3>

            <div className="flex gap-3 flex-wrap items-center justify-start">
                <div className="flex items-center gap-1 text-[12px]">
                    <MdOutlineCalendarToday
                        className="w-4 h-4"
                        style={{ color: item.iconColor }}
                    />
                    <span style={{ color: item.textColor }}>{item.date}</span>
                    ,
                    <span style={{ color: item.textColor }}>{item.time}</span>
                </div>


                <div className="flex items-center gap-1 text-[12px] ">
                    <FiMapPin
                        className="w-4 h-4"
                        style={{ color: item.iconColor }}
                    />
                    <span style={{ color: item.textColor }}>{item.location}</span>
                </div>
            </div>


            <button
                className="bg-white gap-1 w-full flex mt-4 py-1.5 text-center justify-center rounded-full text-[13px] transition cursor-pointer font-bold active:bg-gray-50"
                style={{ border: item.buttonBorder }}
            >
                <MdInfoOutline className="w-3 h-3 mt-[4px]" /> Details
            </button>


        </div>

    );
};

export default WorkShops;
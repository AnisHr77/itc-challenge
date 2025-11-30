import { IoIosTrophy } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { useEffect, useState } from "react";

const stats = [
    {
        label: "Members",
        des:"Members Using Our platform",
        value: 50,
        icon: <RiTeamFill className="w-6 h-6  text-[#262626]" />,
    },
    {
        label: "Playlists",
        des:"Members Using Our platform",
        value: 20,
        icon: <FaUserLarge className="w-5 h-5  text-[#262626]" />,
    },
    {
        label: "Rank",
        des:"Ranking the  best ",
        value: 5,
        icon: <IoIosTrophy className="w-6 h-6  text-[#262626]" />,
    },
    {
        label: "Active Tasks",
        des:"Most Tasks token ",
        value: 6,
        icon: <PiStarFourFill className="w-6 h-6 p-1 bg-[#262626] text-[#fae086] rounded-full  " />,
    },
];

export default function OverviewPanel() {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimated(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="font-apercu-pro w-full">
            <h2 className=" text-lg text-[#262626] tracking-wide font-semibold mb-5">Overview Panel</h2>

            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="w-full bg-white rounded-lg py-2 border-1  px-4 border border-gray-100
                        shadow-[0px_3px_0px_0px_#f7D047]
                       flex items-center gap-4 hover:shadow-md transition-all duration-600 hover:scale-102"
                        style={{
                            transform: animated ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(-20px)',
                            opacity: animated ? 1 : 0.05,
                            transitionDelay: `${index * 100}ms`,
                        }}
                        title={item.des}
                    >
                        <div className="p-2 bg-[#fae086] rounded-full">{item.icon}</div>

                        <div>
                            <p className="text-lg font-bold font-apercu">{item.value}</p>
                            <p className="text-xs font-semibold  ">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
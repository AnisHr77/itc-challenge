import { useEffect, useState } from "react";

export default function Card({  stats = [] }) {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimated(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="font-apercu-pro w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className=" bg-white rounded-lg py-4 px-4 border border-gray-100
                            flex items-center gap-4 hover:shadow-md transition-all duration-200 hover:scale-103"
                            style={{
                                boxShadow: `0px 3px 0px 0px ${item.shadowColor}`,
                                transform: animated
                                    ? "scale(1) translateY(0)"
                                    : "scale(0.8) translateY(-20px)",
                                opacity: animated ? 1 : 0.05,
                                transitionDelay: `${index * 100}ms`,
                            }}
                            title={item.des}
                        >

                            <div
                                className="p-2 rounded-full"
                                style={{
                                    backgroundColor: item.iconBg,
                                }}
                            >
                                <Icon
                                    className="w-8 h-8"
                                    style={{ color: item.iconColor }}
                                />
                            </div>

                            <div>
                                <p className="text-xl font-bold font-apercu-pro ">{item.value}</p>
                                <p className="text-md font-semibold">{item.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

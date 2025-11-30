import React, { useEffect, useRef, useState } from "react";

const attendanceData = [
    { label: "Week 1", value: 80 },
    { label: "Week 2", value: 60 },
    { label: "Week 3", value: 80 },
    { label: "Week 4", value: 20 },
];

const AttendanceChart = ({ title , barColor }) => {
    const percentageLevels = [100, 80, 60, 40, 20];
    const [animated, setAnimated] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    setAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => observer.disconnect();
    }, [animated]);

    return (
        <div ref={chartRef} className="bg-white py-4 px-4 rounded-md shadow-lg w-full max-w-sm relative">
            <h2 className="text-xl font-semibold  mb-4">{title}</h2>
            <div className="  relative left-8 w-[80%] h-48 flex items-end gap-2 px-2 ">
                {percentageLevels.map((level, index) => (
                    <div
                        key={`grid-${level}`}
                        className="absolute left-0 right-0 border-t border-[#D5D5D5] z-0"
                        style={{
                            bottom: `${level}%`,
                            borderTopWidth: level === 20 ? '2px' : '1px',
                            zIndex: level === 20 ? '100' : '0'
                        }}
                    />

                ))}

                {attendanceData.map((item, index) => (
                    <div key={index} className="relative w-[80%] bottom-[15px] flex flex-col items-center flex-1  z-10 h-full justify-end ">
                        <div
                            className="relative w-10 rounded-t-[12px] transition-all duration-700 ease-out z-50"
                            style={{
                                height: animated ? `${(item.value / 100) * 100}%` : '0%',
                                backgroundColor: barColor || '#ffaa78',
                                opacity: 1,
                                transitionDelay: `${index * 250}ms`,
                            }}
                        />
                        <span className="text-xs mt-2 text-neutral-400">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            <div className="  absolute left-4 top-17 text-neutral-400 text-[12px] z-0">
                {percentageLevels.filter(level => level !== 100).map((level, index) => (
                    <div
                        key={`label-${level}`}
                        className="flex items-center"
                        style={{
                            marginTop: index === 0 ? '0' : '20px',
                            height: '16px'
                        }}
                    >
                        {level}%
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttendanceChart;
import React, { useEffect, useState } from "react";

const ProgressEvent = ({ progress, color }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedProgress(progress);
        }, 200);

        return () => clearTimeout(timer);
    }, [progress]);

    return (
        <div className="w-full mt-0 shadow-md py-1 px-4 justify-center items-center rounded-lg " title={"Team Progress"}>
            <h2 className="text-xl tracking-wide font-bold ">
                Team Progress
            </h2>

            <div className="w-full mt-1 h-[10px] bg-zinc-300 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-1200 ease-out"
                    style={{
                        width: `${animatedProgress}%`,
                        background: `${color}`
                    }}
                ></div>
            </div>
            <div className="mt-1 text-sm text-neutral-500 font-semibold">3/4 Teams on track .1 Pending Submission</div>
        </div>
    );
};

export default ProgressEvent;
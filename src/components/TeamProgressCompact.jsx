import React, { useEffect, useState } from "react";

const TeamProgressCompact = ({ progress }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedProgress(progress);
        }, 300);

        return () => clearTimeout(timer);
    }, [progress]);

    return (
        <div className="w-full mt-0 shadow-md py-2 px-3 justify-center items-center rounded-md " title={"Team Progress"}>
            <h2 className="text-xl tracking-wide font-semibold ">
                Team Level Progress
            </h2>

            <div className="w-full mt-1  h-[10px] bg-zinc-300 rounded-full overflow-hidden">
                <div
                    className="h-full bg-yellow-400 rounded-full transition-all duration-1500 ease-out"
                    style={{ width: `${animatedProgress}%` }}
                ></div>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <div className="transition hover:scale-102">
            <TeamProgressCompact progress={80} />
        </div>
    );
};

export default Page;
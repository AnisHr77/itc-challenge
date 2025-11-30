

import { useState } from "react";
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function TeamPointsGraph() {
    const teams = [
        "Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6",
        "Team 7", "Team 8", "Team 9", "Team 10", "Team 11", "Team 12",
    ];

    const pointsData = [
        50, 57, 60, 66, 69, 48, 49, 60, 64, 69, 70, 71,
    ];

    const data = teams.map((name, index) => ({
        name,
        points: pointsData[index],
    }));

    const [selectedTeam, setSelectedTeam] = useState(2);

    return (
        <div className="w-full mt-6">
            <h2 className="text-xl font-bold mb-4">
                Points Earned By Each Team This Month
            </h2>

            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#facc15" stopOpacity={0.6} />
                                <stop offset="80%" stopColor="#facc15" stopOpacity={0.01} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                        <XAxis dataKey="name" tick={{ fontSize: 10 }} />

                        <Tooltip
                            formatter={(value) => [`${value} Pts Earned`, "Points"]}
                            contentStyle={{ borderRadius: "10px", borderColor: "#facc15" }}
                        />

                        <Area
                            type="monotone"
                            dataKey="points"
                            stroke="#facc15"
                            strokeWidth={3}
                            fill="url(#yellowGradient)"
                            activeDot={{ r: 5, fill: "#facc15", stroke: "#facc15" }}
                            dot={{ r: 5, fill: "#facc15", stroke: "#facc15", strokeWidth: 0 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap justify-between mt-4 text-sm">
                {teams.map((team, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTeam(index)}
                        className={`px-2 py-1 rounded-md transition ${
                            selectedTeam === index
                                ? "text-yellow-600 font-bold"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >

                    </button>
                ))}
            </div>
        </div>
    );
}

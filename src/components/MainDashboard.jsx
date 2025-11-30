import React from 'react';
import OverviewPanel from './OverviewPanel';
import QuickActions from './QuickActions';
import TeamPointsGraph from './TeamPointsGraph';
import { actionsData } from "../data/actionsData";
const MainDashboard = () => {
    return (
        <div className="space-y-6">
            <OverviewPanel />
            <TeamPointsGraph />
            <QuickActions data={actionsData}  />
        </div>
    );
};

export default MainDashboard;
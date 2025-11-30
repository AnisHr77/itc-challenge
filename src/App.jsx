import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import UserProfileCompact from './components/UserProfileCompact';
import TeamProgressCompact from './components/TeamProgressCompact';
import ManagementHub from './components/ManagementHub';
import MainDashboard from "./components/MainDashboard";
import EventsPage from "./pages/EventsPage";
import TeamsPage from "./pages/TeamsPage";
import ProfilePage from "./pages/ProfilePage";
import QuestsPage from "./pages/QuestsPage";

import ManageTeam from "./pages/ManageTeam";
import ManageEvents from "./pages/ManageEvents";
import ManageReports from "./pages/ManageReports";
import ManageContent from "./pages/ManageContent";

import ProfileCompactEvent from './components/events/ProfileCompactEvent';
import ProgressEvent from "./components/events/ProgressEvent.jsx";
import AttendanceChart from "./components/AttendanceChart.jsx";
import Action from "./components/Action.jsx";


function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route
                    path="/home"
                    element={
                        <Home
                            topPanel={<UserProfileCompact />}
                            bottomPanel={
                                <>
                                    <TeamProgressCompact />
                                    <ManagementHub />
                                </>
                            }
                            rightPanel={
                                <>
                                    <UserProfileCompact />
                                    <TeamProgressCompact />
                                    <ManagementHub />
                                </>
                            }
                        >
                            <MainDashboard />
                        </Home>
                    }
                />

                <Route
                    path="/"
                    element={
                        <Home
                            topPanel={<UserProfileCompact />}
                            bottomPanel={
                                <>
                                    <TeamProgressCompact />
                                    <ManagementHub />
                                </>
                            }
                            rightPanel={
                                <>
                                    <UserProfileCompact />
                                    <TeamProgressCompact />
                                    <ManagementHub />
                                </>
                            }
                        >
                            <MainDashboard />
                        </Home>
                    }
                />
                <Route
                    path="/events"
                    element={
                        <Home
                            topPanel={<ProfileCompactEvent />}
                            bottomPanel={
                                <>
                                    <ProgressEvent progress={80} color={"rgb(255, 209, 171)"} />
                                    <AttendanceChart barColor="rgb(255, 170, 120)" />
                                    <Action data={[{
                                        label: "Add Event",
                                        icon: "FiPlus",
                                        bg: "#FFF6EE",
                                        shadow: "#FFD1AB",
                                        actionType: "addEvent"
                                    }]}/>
                                </>
                            }
                            rightPanel={
                                <>
                                    <ProfileCompactEvent />
                                    <ProgressEvent progress={80} color={"rgb(255, 209, 171)"} />
                                    <AttendanceChart barColor="rgb(255, 209, 171)" />
                                    <Action data={[{
                                        label: "Add Event",
                                        icon: "FiPlus",
                                        bg: "#FFF6EE",
                                        shadow: "#FFD1AB",
                                        actionType: "addEvent"
                                    }]}/>
                                </>
                            }
                        >
                            <EventsPage />
                        </Home>
                    }
                />

                <Route path="/teams" element={ <Home
                    topPanel={<UserProfileCompact />}
                    bottomPanel={
                        <>
                            <TeamProgressCompact />
                            <ManagementHub />
                        </>
                    }
                    rightPanel={
                        <>
                            <UserProfileCompact />
                            <TeamProgressCompact />
                            <ManagementHub />
                        </>
                    }
                ><TeamsPage /></Home>} />
                <Route path="/profile" element={ <Home

                    bottomPanel={
                        <>
                            <TeamProgressCompact />
                            <ManagementHub />
                        </>
                    }
                    rightPanel={
                        <>

                            <TeamProgressCompact />
                            <ManagementHub />
                        </>
                    }
                ><ProfilePage /></Home>} />


                <Route path="/manage-team" element={<Home
                    topPanel={<ProfileCompactEvent />}
                    bottomPanel={
                        <>
                            <ProgressEvent progress={80} color={"#C3D9FF"} />
                            <AttendanceChart
                                title = {"Attendance Rate"}
                                barColor="#C3D9FF"
                            />
                            <Action data={[{
                                label: "Add Member",
                                icon: "FiPlus",
                                bg: "#f3f8ff",
                                shadow: "#C3D9FF",
                                actionType: "addMember"
                            }]}/>
                        </>
                    }
                    rightPanel={
                        <>
                            <ProfileCompactEvent />
                            <ProgressEvent progress={80} color={"#C3D9FF"} />
                            <AttendanceChart
                                title = {"Attendance Rate"}
                                barColor="#C3D9FF"
                            />
                            <Action data={[{
                                label: "Add Member",
                                icon: "FiPlus",
                                bg: "#f3f8ff",
                                shadow: "#C3D9FF",
                                actionType: "addMember"
                            }]}/>
                        </>
                    }
                ><ManageTeam /></Home>} />
                <Route path="/manage-events" element={<Home
                    topPanel={<ProfileCompactEvent />}
                    bottomPanel={
                        <>
                            <ProgressEvent progress={80} color={"rgb(255, 209, 171)"} />
                            <AttendanceChart
                                title = {"Attendance Rate"}
                                barColor="rgb(255, 170, 120)"
                            />
                            <Action data={[{
                                label: "Add Event",
                                icon: "FiPlus",
                                bg: "#f3f8ff",
                                shadow: "#C3D9FF",
                                actionType: "addEvent"
                            }]}/>
                        </>
                    }
                    rightPanel={
                        <>
                            <ProfileCompactEvent />
                            <ProgressEvent progress={80} color={"rgb(255, 209, 171)"} />
                            <AttendanceChart
                                title = {"Attendance Rate"}
                                barColor="rgb(255, 209, 171)"
                            />
                        </>
                    }
                ><ManageEvents /></Home>} />
                <Route path="/manage-reports" element={<Home
                    topPanel={<ProfileCompactEvent />}
                    bottomPanel={
                        <>
                            <ProgressEvent progress={80} color={"#ffa9ab"} />
                            <AttendanceChart
                                barColor="#ffa9ab"
                            />
                            <Action data={[{
                                label: "Add Report",
                                icon: "FiPlus",
                                bg: "#ffedee",
                                shadow: "#ffa9ab",
                                actionType: "addReport"
                            }]}/>
                        </>
                    }
                    rightPanel={
                        <>
                            <ProfileCompactEvent />
                            <ProgressEvent progress={80} color={"#ffa9ab"} />
                            <AttendanceChart

                                barColor="#ffa9ab"
                            />
                            <Action data={[{
                                label: "Add Report",
                                icon: "FiPlus",
                                bg: "#ffedee",
                                shadow: "#ffa9ab",
                                actionType: "addReport"
                            }]}/>
                        </>
                    }
                ><ManageReports /></Home>} />
                <Route path="/manage-content" element={
                    <Home
                    topPanel={<ProfileCompactEvent />}
                    bottomPanel={
                        <>
                            <ProgressEvent progress={80} color={"#e1c9ff"} />
                            <AttendanceChart

                                barColor="#faf6ff"
                            />
                            <Action data={[{
                                label: "Add Content",
                                icon: "FiPlus",
                                bg: "#faf6ff",
                                shadow: "#e1c9ff",
                                actionType: "addContent"
                            }]}/>
                        </>
                    }
                    rightPanel={
                        <>
                            <ProfileCompactEvent />
                            <ProgressEvent progress={80} color={"#e1c9ff"} />
                            <AttendanceChart

                                barColor="#e1c9ff"
                            />
                            <Action data={[{
                                label: "Add Content",
                                icon: "FiPlus",
                                bg: "#faf6ff",
                                shadow: "#e1c9ff",
                                actionType: "addContent"
                            }]}/>
                        </>
                    }
                ><ManageContent /></Home>} />

                <Route path="*" element={ <Home
                    topPanel={<UserProfileCompact />}
                    bottomPanel={
                        <>
                            <TeamProgressCompact />
                            <ManagementHub />
                        </>
                    }
                    rightPanel={
                        <>
                            <UserProfileCompact />
                            <TeamProgressCompact />
                            <ManagementHub />
                        </>
                    }
                >< TeamsPage/></Home>} />
            </Routes>
        </Router>
    );
}

export default App;
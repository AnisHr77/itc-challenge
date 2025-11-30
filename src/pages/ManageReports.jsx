import React, { useState, useEffect } from "react";
import Cards from "../components/Report/Card";
import ReportsTable from "../components/Report/ReportsTable.jsx";
import ReportForm from "../components/forms/ReportForm.jsx";
import { BiTask } from "react-icons/bi";
import { MdOutlinePendingActions, MdAssignmentLate } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const ManageReports = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showReportForm, setShowReportForm] = useState(false);
    const [reports, setReports] = useState([]);

    const initialReports = Array.from({ length: 12 }).map((_, index) => ({
        id: index + 1,
        title: "Report Title",
        user: "Username",
        status: index % 3 === 0 ? "pending" : index % 3 === 1 ? "submitted" : "late",
        date: "Oct 22, 2025",
        report: index % 3 === 2 ? "Not Found" : "Report.Pdf",
    }));

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const action = searchParams.get("action");

        if (action === "addReport" && !showReportForm) {
            setShowReportForm(true);
        }


        if (reports.length === 0) {
            setReports(initialReports);
        }
    }, [location.search, showReportForm]);

    const handleAddReport = (newReport) => {
        setReports((prev) => [newReport, ...prev]);
        setShowReportForm(false);
        navigate("/manage-reports", { replace: true });
    };

    const handleCancel = () => {
        setShowReportForm(false);
        navigate("/manage-reports", { replace: true });
    };

    return (
        <div className="min-w-0">
            <h1 className="text-2xl font-bold mb-3">Report Management</h1>
            <h1 className="text-md font-bold mb-4">
                Upload, Track, And Review Team Reports
            </h1>

            <Cards
                stats={[
                    {
                        label: "Tasks",
                        value: 21,
                        icon: BiTask,
                        iconBg: "#ffedee",
                        iconColor: "#ffa9ab",
                        shadowColor: "#ffa9ab",
                    },
                    {
                        label: "Pending",
                        value: 17,
                        icon: MdOutlinePendingActions,
                        iconBg: "#ffedee",
                        iconColor: "#ffa9ab",
                        shadowColor: "#ffa9ab",
                    },
                    {
                        label: "Late",
                        value: 21,
                        icon: MdAssignmentLate,
                        iconBg: "#ffedee",
                        iconColor: "#ffa9ab",
                        shadowColor: "#ffa9ab",
                    },
                ]}
            />

            <ReportsTable reports={reports} />

            {showReportForm && (
                <div className="mt-4 min-w-0">
                    <ReportForm
                        onAddReport={handleAddReport}
                        onCancel={handleCancel}
                    />
                </div>
            )}
        </div>
    );
};

export default ManageReports;
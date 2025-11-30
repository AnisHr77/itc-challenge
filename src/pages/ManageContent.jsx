import React, { useState, useEffect } from "react";
import Cards from "../components/Report/Card";
import ContentTable from "../components/Content/ContentTable.jsx";
import ReportForm from "../components/forms/ReportForm.jsx";
import { BiTask } from "react-icons/bi";
import { MdOutlinePendingActions, MdAssignmentLate } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const ManageContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showReportForm, setShowReportForm] = useState(false);
    const [contents, setContents] = useState([]);

    const initialContents = Array.from({ length: 12 }).map((_, index) => ({
        id: index + 1,
        type: "Content Type " + (index + 1),
        user: "Username",
        status: index % 3 === 0 ? "pending" : index % 3 === 1 ? "submitted" : "late",
        date: "Oct 22, 2025",
        report: index % 3 === 2 ? "Not Found" : "Content.Pdf",
    }));

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const action = searchParams.get("action");

        if (action === "addReport" && !showReportForm) {
            setShowReportForm(true);
        }

        if (contents.length === 0) {
            setContents(initialContents);
        }
    }, [location.search, showReportForm, contents.length]);

    const handleAddContent = (newContent) => {
        setContents((prev) => [newContent, ...prev]);
        setShowReportForm(false);
        navigate("/manage-content", { replace: true });
    };

    const handleCancel = () => {
        setShowReportForm(false);
        navigate("/manage-content", { replace: true });
    };

    return (
        <div className="min-w-0">
            <h1 className="text-2xl font-bold mb-3">Content Management</h1>
            <h1 className="text-md font-bold mb-4">
                Manage Content, Track, And Review Team Progress
            </h1>

            <Cards
                stats={[
                    {
                        label: "Tasks",
                        value: 35,
                        icon: BiTask,
                        iconBg: "#faf6ff",
                        iconColor: "#e1c9ff",
                        shadowColor: "#e1c9ff",
                    },
                    {
                        label: "Pending",
                        value: 14,
                        icon: MdOutlinePendingActions,
                        iconBg: "#faf6ff",
                        iconColor: "#e1c9ff",
                        shadowColor: "#e1c9ff",
                    },
                    {
                        label: "Late",
                        value: 76,
                        icon: MdAssignmentLate,
                        iconBg: "#faf6ff",
                        iconColor: "#e1c9ff",
                        shadowColor: "#e1c9ff",
                    },
                ]}
            />

            <ContentTable contents={contents} />

            {showReportForm && (
                <div className="mt-4 min-w-0">
                    <ReportForm
                        onAddReport={handleAddContent}
                        onCancel={handleCancel}
                    />
                </div>
            )}
        </div>
    );
};

export default ManageContent;
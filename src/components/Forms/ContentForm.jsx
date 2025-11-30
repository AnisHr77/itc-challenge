import React, { useState } from "react";

const ContentForm = ({ onAddContent, onCancel }) => {
    const [formData, setFormData] = useState({
        title: "",
        submittedBy: "",
        status: "submitted",
        submissionDate: "",
        report: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContent = {
            id: Date.now(),
            title: formData.title,
            submittedBy: formData.submittedBy,
            status: formData.status,
            submissionDate: formData.submissionDate,
            report: formData.report || "not found",
            Actions: "approve",
        };
        onAddContent(newContent);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Add New Content</h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Content Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Submitted By
                            </label>
                            <input
                                type="text"
                                name="submittedBy"
                                value={formData.submittedBy}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="submitted">Submitted</option>
                                <option value="pending">Pending</option>
                                <option value="late">Late</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Submission Date
                            </label>
                            <input
                                type="date"
                                name="submissionDate"
                                value={formData.submissionDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Report File
                            </label>
                            <input
                                type="text"
                                name="report"
                                value={formData.report}
                                onChange={handleChange}
                                placeholder="report.pdf"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Add Content
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContentForm;
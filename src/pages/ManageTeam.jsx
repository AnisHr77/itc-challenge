import React, { useState, useEffect } from "react";
import UsersList from "../components/Users/UsersList";
import UserForm from "../components/forms/UserForm";
import { useLocation, useNavigate } from "react-router-dom";

const ManageTeam = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showMemberForm, setShowMemberForm] = useState(false);
    const [members, setMembers] = useState([]);

    console.log('ManageTeam rendered, showMemberForm:', showMemberForm);
    console.log('Current URL search:', location.search);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const action = searchParams.get('action');
        console.log('URL action parameter:', action);

        if (action === 'addMember') {
            console.log('Setting showMemberForm to TRUE');
            setShowMemberForm(true);
        }
    }, [location.search]);

    const handleAddMember = (newMember) => {
        console.log('Adding new member:', newMember);
        setMembers(prev => [...prev, newMember]);
        setShowMemberForm(false);
        navigate('/manage-team', { replace: true });
    };

    const handleCancel = () => {
        console.log('Canceling form');
        setShowMemberForm(false);
        navigate('/manage-team', { replace: true });
    };

    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-3">Users Management</h1>
            <h1 className="text-lg font-bold mb-4">Manage All Users And Roles</h1>
            <UsersList additionalMembers={members} />

            {showMemberForm && (
                <div>
                    <p>DEBUG: Form should be visible now</p>
                    <UserForm
                        onAddUser={handleAddMember}
                        onCancel={handleCancel}
                    />
                </div>
            )}
        </div>
    );
};

export default ManageTeam;
import React, { useState, useEffect } from "react";
import WorkShops from "../components/events/WorkShops";
import EventList from "../components/events/EventList";
import EventForm from "../components/forms/EventForm";
import { workshopsData } from "../data/workshopsData";
import { useNavigate, useLocation } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

const EventsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showEventForm, setShowEventForm] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const action = searchParams.get('action');
        console.log('URL action parameter:', action);

        if (action === 'addEvent') {
            console.log('Showing event form');
            setShowEventForm(true);
        }
    }, [location.search]);

    const handleAddEvent = (newEvent) => {
        setEvents(prev => [...prev, newEvent]);
        setShowEventForm(false);

        navigate('/events', { replace: true });
    };

    const handleCancel = () => {
        setShowEventForm(false);
        navigate('/events', { replace: true });
    };

    return (
        <div>
            <div className={'flex justify-between mb-5'}>
                <div>
                    <h1 className="text-lg font-bold ">Events</h1>
                </div>
                <div
                    className="flex items-center cursor-pointer hover:opacity-70 transition"
                    onClick={() => navigate('/home')}
                >
                    <LuArrowLeft className="mr-1 text-gray-500" />
                    <h1 className="text-md text-gray-500 font-semibold">
                        Back
                    </h1>
                </div>
            </div>
            <h1 className="text-lg font-bold mb-3">Workshops</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshopsData.map((item, index) => (
                    <WorkShops key={index} item={item} />
                ))}
            </div>

            <EventList additionalEvents={events} />

            {showEventForm && (
                <EventForm
                    onAddEvent={handleAddEvent}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default EventsPage;
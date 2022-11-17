import React from 'react';

const AppointmentOption = ({ appointmentOption, setSelectedAppointment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-primary mx-auto">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? slots[0] : "No Slots Available"
                    }
                </p>
                <p>{
                    slots.length
                } <span></span>
                    {
                        slots.length > 1 ? "spaces" : "space"
                    } available
                </p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setSelectedAppointment(appointmentOption)}
                        htmlFor="booking-modal" className="btn btn-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    useEffect(() => {
        fetch("appointmentOptions.json")
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])


    return (
        <div className='my-16'>
            <p className='text-center font-bold text-secondary'>You Have Selected Date : {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setSelectedAppointment={setSelectedAppointment}
                    ></AppointmentOption>)
                }
            </div>
            {
                selectedAppointment &&
                <BookingModal
                    selectedDate={selectedDate}
                    selectedAppointment={selectedAppointment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;
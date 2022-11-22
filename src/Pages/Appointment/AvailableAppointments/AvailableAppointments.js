import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ selectedDate }) => {

    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointments').then(res => res.json())
    });

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
                    key={selectedAppointment._id}
                    selectedDate={selectedDate}
                    selectedAppointment={selectedAppointment}
                    setSelectedAppointment={setSelectedAppointment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;
import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ selectedAppointment, selectedDate, setSelectedAppointment }) => {
    const { name, slots } = selectedAppointment;
    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: selectedAppointment.name,
            patient: name,
            email,
            phone,
            slot
        }
        setSelectedAppointment(null);
    };
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid col-span-1 gap-3 mt-10'>
                        <input type="text" value={date} placeholder="Type here" className="input input-bordered input-info w-full " disabled />
                        <select name='slot' className="select w-full border-spacing-10 input-info">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-info w-full " />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-info w-full " />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-info w-full " />
                        <br />
                        <input className='w-full  btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
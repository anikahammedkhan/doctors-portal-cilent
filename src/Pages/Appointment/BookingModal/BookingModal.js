import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ selectedAppointment, selectedDate }) => {
    const { name, slots } = selectedAppointment;
    const date = format(selectedDate, 'PP');
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid col-span-1 gap-3 mt-10'>
                        <input type="text" value={date} placeholder="Type here" className="input input-bordered input-info w-full " disabled />
                        <select className="select w-full border-spacing-10 input-info">
                            {
                                slots.map(slot => <option
                                    key={slot}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
                        <br />
                        <input className='w-full  btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
import chair from "../../../Assets/images/chair.png"

import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="hero my-6 heroBg">
            <div className="hero-content flex-col lg:flex-row-reverse p-0 m-6">
                <img src={chair} alt="dentist chair" className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='mr-10'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
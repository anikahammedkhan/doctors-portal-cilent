import React from 'react';
import doctor from '../../../Assets/images/doctor.png';
import appoinment from '../../../Assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section className='mt-16'
            style={{
                backgroundImage: `url(${appoinment})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
            <div className="">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img alt='' src={doctor} className="-mt-32 hidden md:block lg:w-2/3 rounded-lg" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-2xl font-bold text-primary">Appointment</h1>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;
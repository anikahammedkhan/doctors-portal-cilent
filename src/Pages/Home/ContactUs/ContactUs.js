import React from 'react';
import contactBg from "../../../Assets/images/appointment.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className="p-6 dark:text-gray-100"
            style={{
                backgroundImage: `url(${contactBg})`,
                backgroundSize: "cover",
            }}
        >
            <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md">
                <h2 className="w-full text-2xl font-bold leading-tight text-primary text-center">Contact us</h2>
                <h3 className='text-4xl font-semibold text-white text-center'>Stay Connected With Us</h3>
                <div>
                    <input id="email" type="email" placeholder="Your Email Address" required className="block w-full p-2 rounded border focus:ring focus:ring-opacity-25" />
                </div>
                <div>
                    <input id="subject" type="text" placeholder="Subject" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <textarea id="message" type="text" placeholder="Your Message..." className="block h-[150px] w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" required></textarea>
                </div>
                <div type="submit" className='text-center'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;
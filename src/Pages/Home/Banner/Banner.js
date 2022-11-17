import React from 'react';
import chair from '../../../Assets/images/chair.png';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="hero heroBg p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={chair} className="rounded-lg shadow-2xl lg:w-1/2" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-ghost bg-gradient-to-r from-primary to-secondary text-white font-semibold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
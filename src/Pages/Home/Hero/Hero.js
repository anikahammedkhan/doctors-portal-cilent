import React from 'react';
import treatment from '../../../Assets/images/treatment.png';

const Hero = () => {
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row-reverse items-center w-full justify-between px-20 mt-16">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Exceptional Dental <br />Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-ghost bg-gradient-to-r from-primary to-secondary text-white font-semibold">Get Started</button>
                </div>
                <div className="card flex-shrink-0 w-full lg:w-1/3 shadow-2xl bg-base-100 m-20">
                    <img className='shadow-2xl rounded-lg w-full' src={treatment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
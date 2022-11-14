import React from 'react';
import floride from '../../../Assets/images/fluoride.png';
import cavity from '../../../Assets/images/cavity.png';
import whitening from '../../../Assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            img: floride,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
            id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            img: whitening,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-2xl uppercase text-primary font-semibold'>Our Services</h2>
                <h1 className='text-3xl font-bold'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import clock from '../../../Assets/icons/clock.svg';
import marker from '../../../Assets/icons/marker.svg';
import phone from '../../../Assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: "Opening Hours",
            description: "We are open 9.00am - 10.00pm every day",
            icon: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            name: "Our Location",
            description: "We are open 9.00am - 10.00pm every day",
            icon: marker,
            bgClass: "bg-accent"
        },
        {
            id: 3,
            name: "Contact Us",
            description: "We are open 9.00am - 10.00pm every day",
            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[-80px]'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
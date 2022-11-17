import React from 'react';
import Quote from "../../../Assets/icons/quote.svg";
import people1 from '../../../Assets/images/people1.png';
import people2 from '../../../Assets/images/people2.png';
import people3 from '../../../Assets/images/people3.png';
import SingleReview from './SingleReview';

const Testimonial = () => {


    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            from: 'California',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            from: 'California',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            from: 'California',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h5 className='text-4xl'>What Our Patients Says</h5>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={Quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
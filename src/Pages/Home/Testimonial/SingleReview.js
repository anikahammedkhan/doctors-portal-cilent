import React from 'react';

const SingleReview = ({ review }) => {
    const { name, from, review: userReview, img } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-5">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">
                            {name}
                        </h5>
                        <p>{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
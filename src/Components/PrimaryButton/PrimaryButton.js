import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-ghost bg-gradient-to-r from-primary to-secondary text-white font-semibold">{children}</button>
    );
};

export default PrimaryButton;
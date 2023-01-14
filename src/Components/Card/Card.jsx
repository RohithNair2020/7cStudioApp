import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div className="card">
            <p className="card-subheader">Total Active Users</p>
            <p className="card-title">112,893</p>
            <div className="card-footer">
                <p>Growth</p>
                <p className="green green-text">
                    <span className="growth-arrow green">▲</span> 15.5%
                </p>
            </div>
        </div>
    );
};

export default Card;

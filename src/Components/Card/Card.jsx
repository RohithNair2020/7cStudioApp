import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div className="card">
            <text className="card-subheader">Total Active Users</text>
            <text className="card-title">112,893</text>
            <div className="card-footer">
                <text>Growth</text>
                <text className="green green-text">
                    <span class="growth-arrow green">▲</span> 15.5%
                </text>
            </div>
        </div>
    );
};

export default Card;

import React from 'react';
import './chart.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Chart = () => {
    return (
        <div className="chart-container">
            <div className="chart-header">
                <text className="chart-header-title">Top Songs</text>
                <text className="chart-header-option">More</text>
            </div>
            <div className="chart-list">
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-text">
                        <text className="chart-list-item-title">Song Name</text>
                        <text className="chart-list-item-subtitle">Artist</text>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-text">
                        <text className="chart-list-item-title">Song Name</text>
                        <text className="chart-list-item-subtitle">Artist</text>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-text">
                        <text className="chart-list-item-title">Song Name</text>
                        <text className="chart-list-item-subtitle">Artist</text>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-text">
                        <text className="chart-list-item-title">Song Name</text>
                        <text className="chart-list-item-subtitle">Artist</text>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-text">
                        <text className="chart-list-item-title">Song Name</text>
                        <text className="chart-list-item-subtitle">Artist</text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;

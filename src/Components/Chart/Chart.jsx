import React from 'react';
import './chart.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Chart = () => {
    return (
        <div className="chart-container">
            <div className="chart-header">
                <small className="chart-header-title">Top Songs</small>
                <small className="chart-header-option">More</small>
            </div>
            <div className="chart-list">
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-small">
                        <small className="chart-list-item-title">
                            Song Name
                        </small>
                        <small className="chart-list-item-subtitle">
                            Artist
                        </small>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-small">
                        <small className="chart-list-item-title">
                            Song Name
                        </small>
                        <small className="chart-list-item-subtitle">
                            Artist
                        </small>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-small">
                        <small className="chart-list-item-title">
                            Song Name
                        </small>
                        <small className="chart-list-item-subtitle">
                            Artist
                        </small>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-small">
                        <small className="chart-list-item-title">
                            Song Name
                        </small>
                        <small className="chart-list-item-subtitle">
                            Artist
                        </small>
                    </div>
                </div>
                <div className="chart-list-item">
                    <InsertPhotoIcon
                        className="chart-list-item-image"
                        fontSize="small"
                    />
                    <div className="chart-list-item-small">
                        <small className="chart-list-item-title">
                            Song Name
                        </small>
                        <small className="chart-list-item-subtitle">
                            Artist
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;

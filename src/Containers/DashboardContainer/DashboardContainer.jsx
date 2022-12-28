import React from 'react';
import { Button, Divider, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './dashboardContainer.css';
import Card from '../../Components/Card/Card';
import Chart from '../../Components/Chart/Chart';

const DashboardContainer = () => {
    return (
        <>
            <header className="header dashboard-header">
                <h2 className="header-heading">Dashboard</h2>
                <div className="header-buttons-group">
                    <Button
                        sx={{
                            color: 'var(--app-text)',
                            borderRadius: '2px',
                            border: 'var(--app-border-2)',
                        }}
                        className="btn"
                    >
                        Add Users
                    </Button>
                    <Button
                        sx={{
                            color: 'var(--app-text)',
                            backgroundColor: '#FDB927',
                            borderRadius: '2px',
                            border: 'var(--button-border-yellow)',
                        }}
                        className="btn"
                    >
                        upload/create
                    </Button>
                    <IconButton
                        sx={{
                            boxSizing: 'border-box',
                            color: 'var(--app-text)',
                            border: 'var(--app-border-2)',
                            borderRadius: '2px',
                        }}
                        className="btn"
                    >
                        <MoreHorizIcon fontSize="small" />
                    </IconButton>
                </div>
            </header>
            <section className="stats">
                <div className="stats-header">
                    <h4 className="section-heading">Basic Stats</h4>
                </div>
                <div className="cards-group">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Divider />
            </section>
            <section className="stats">
                <div className="stats-header">
                    <h4 className="section-heading">Top Charts</h4>
                </div>
                <div className="cards-group">
                    <Chart />
                    <Chart />
                    <Chart />
                    <Chart />
                </div>
            </section>
        </>
    );
};

export default DashboardContainer;

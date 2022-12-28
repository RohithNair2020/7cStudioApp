import React from 'react';
import './pageContainer.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import ArtistsContainer from '../ArtistsContainer/ArtistsContainer';
import { Breadcrumbs, Collapse, Link } from '@mui/material';

const PageContainer = () => {
    const [open, setOpen] = React.useState(false);
    const currentPath = useLocation();

    React.useEffect(() => {
        if (currentPath.pathname === '/artists') {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [currentPath]);
    return (
        <div className="page-container">
            <Collapse in={open}>
                <div className="breadcrumbs" role="presentation">
                    <Breadcrumbs
                        className="breadcrumbs"
                        aria-label="breadcrumb"
                    >
                        <Link
                            sx={{
                                color: 'var(--app-text-lighter)',
                            }}
                            variant="subtitle2"
                            className="breadcrumbs"
                            underline="none"
                        >
                            First Level Menu
                        </Link>
                        <Link
                            sx={{
                                color: 'var(--app-text-lighter)',
                            }}
                            variant="subtitle2"
                            className="breadcrumbs"
                            underline="none"
                        >
                            Second Level Menu
                        </Link>
                        <Link
                            sx={{
                                color: 'var(--app-text-lighter)',
                            }}
                            variant="subtitle2"
                            className="breadcrumbs"
                            underline="none"
                        >
                            Current Page
                        </Link>
                    </Breadcrumbs>
                </div>
            </Collapse>
            <Routes>
                <Route path="/" element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<DashboardContainer />} />
                <Route path="artists" element={<ArtistsContainer />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};

export default PageContainer;

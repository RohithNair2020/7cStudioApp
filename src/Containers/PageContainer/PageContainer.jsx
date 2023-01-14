import React from 'react';
import './pageContainer.css';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import ArtistsContainer from '../ArtistsContainer/ArtistsContainer';
import { Breadcrumbs, Collapse, Link } from '@mui/material';

const PageContainer = () => {
    const [open, setOpen] = React.useState(false);
    const { pathname } = useLocation();
    console.log('pathname', pathname);

    React.useEffect(() => {
        if (
            pathname === '/dashboard/artists' ||
            pathname === '/dashboard/songs'
        ) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [pathname]);
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
            <Outlet />
        </div>
    );
};

export default PageContainer;

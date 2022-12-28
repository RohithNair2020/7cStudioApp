import React, { useState } from 'react';
import './sidebarContainer.css';
import { Link, useLocation } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AlbumIcon from '@mui/icons-material/Album';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const SidebarContainer = () => {
    const [contentOpen, setContentOpen] = useState(false);
    const [uploaderOpen, setUploaderOpen] = useState(false);
    const [selected, setSelected] = useState(1);
    const location = useLocation();

    const handleContentClick = () => {
        setContentOpen(!contentOpen);
    };
    const handleUploaderClick = () => {
        setUploaderOpen(!uploaderOpen);
    };
    React.useEffect(() => {
        if (location.pathname === '/dashboard') {
            setSelected(1);
        } else if (location.pathname === '/artists') {
            setSelected(2);
        }
    }, [location]);
    return (
        <div className="sidebar-container">
            <Link className="router-link sidebar-logo" to="/">
                <h1 className="sidebar-logo">Logo</h1>
            </Link>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Link className="router-link" to="dashboard">
                    <ListItemButton
                        className="menu-list-item"
                        onClick={() => setSelected(1)}
                        sx={{
                            pl: 4,
                            borderRight:
                                selected === 1 ? '6px solid #1890FF' : '',
                            backgroundColor: selected === 1 ? '#E6F7FF' : '',
                            boxSizing: 'border-box',
                        }}
                    >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <ListSubheader component="div" id="nested-list-subheader">
                    Users
                </ListSubheader>
                <ListItemButton onClick={handleUploaderClick}>
                    <ListItemIcon>
                        <SupportAgentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Content Uploaders" />
                    {uploaderOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                    in={uploaderOpen || location.pathname === '/artists'}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <Link className="router-link" to="artists">
                            <ListItemButton
                                sx={{
                                    pl: 4,
                                    borderRight:
                                        selected === 2
                                            ? '6px solid #1890FF'
                                            : '',
                                    backgroundColor:
                                        selected === 2 ? '#E6F7FF' : '',
                                    boxSizing: 'border-box',
                                }}
                                className="menu-list-item"
                                onClick={() => setSelected(2)}
                            >
                                <ListItemText primary="Artists" />
                            </ListItemButton>
                        </Link>
                        <ListItemButton>
                            <ListItemText primary="Podcasts" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListSubheader component="div" id="nested-list-subheader">
                    Goongoonalo Content
                </ListSubheader>
                <ListItemButton onClick={handleContentClick}>
                    <ListItemIcon>
                        <AlbumIcon />
                    </ListItemIcon>
                    <ListItemText primary="Content" />
                    {contentOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={contentOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Playlists" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    );
};

export default SidebarContainer;

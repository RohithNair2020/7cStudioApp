import { Button, IconButton } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './songsContainer.css';
import SongsTable from '../SongsTable/SongsTable';

const SongsContainer = () => {
    return (
        <>
            <header className="header artists-header">
                <h2 className="header-heading">Songs</h2>
                <div className="header-buttons-group">
                    <Button
                        // onClick={handleClick}
                        sx={{
                            color: 'var(--app-text)',
                            backgroundColor: '#FDB927',
                            borderRadius: '2px',
                            border: 'var(--button-border-yellow)',
                        }}
                        className="btn"
                    >
                        Add Songs
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
            <SongsTable />
        </>
    );
};

export default SongsContainer;

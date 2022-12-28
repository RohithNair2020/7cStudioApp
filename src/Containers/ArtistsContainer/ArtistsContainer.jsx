import { Button, IconButton } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './artistsContainer.css';
import ArtistTable from '../ArtistTable/ArtistTable';
import FormDialog from '../FormDialog/FormDialog';

const ArtistsContainer = () => {
    const [showForm, setShowForm] = React.useState(false);

    const handleClick = () => {
        setShowForm(true);
    };

    const handleClose = () => {
        setShowForm(false);
    };

    return (
        <>
            <FormDialog open={showForm} onClose={handleClose} />
            <header className="header artists-header">
                <h2 className="header-heading">Artists</h2>
                <div className="header-buttons-group">
                    <Button
                        onClick={handleClick}
                        sx={{
                            color: 'var(--app-text)',
                            backgroundColor: '#FDB927',
                            borderRadius: '2px',
                            border: 'var(--button-border-yellow)',
                        }}
                        className="btn"
                    >
                        Add Artists
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
            <div className="artists-table">
                <ArtistTable />
            </div>
        </>
    );
};

export default ArtistsContainer;

import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'antd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './songsContainer.css';
import SongsTable from '../SongsTable/SongsTable';
import AddSongsForm from '../../Components/AddSongsForm/AddSongsForm';

const SongsContainer = () => {
    const [open, setOpen] = useState(false);

    const openAddSongsForm = () => {
        setOpen(!open);
    };

    return (
        <>
            <header className="header artists-header">
                <h2 className="header-heading">Songs</h2>
                <div className="header-buttons-group">
                    <Button
                        onClick={openAddSongsForm}
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
            <Modal open={open} footer={null} closable={false}>
                <AddSongsForm onClose={() => setOpen(false)} />
            </Modal>
            <SongsTable />
        </>
    );
};

export default SongsContainer;

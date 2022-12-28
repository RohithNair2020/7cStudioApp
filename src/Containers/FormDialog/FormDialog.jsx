import React from 'react';
import './formDialog.css';
import { Close, DeleteOutline } from '@mui/icons-material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {
    Button,
    Checkbox,
    Collapse,
    Dialog,
    DialogTitle,
    Divider,
    FormControlLabel,
    IconButton,
} from '@mui/material';

const FormDialog = ({ open, onClose }) => {
    const [image, setImage] = React.useState(null);
    const [imageName, setImageName] = React.useState('');

    const onUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const handleClose = () => {
        onClose();
    };

    const removePhoto = () => {
        setImage(null);
    };

    React.useEffect(() => {
        if (image) {
            setImageName(image.name);
        }
    }, [image]);

    return (
        <div className="form-dialog">
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <div className="form-dialog-container">
                    <header className="form-header">
                        <DialogTitle className="form-title">
                            Add Artist
                        </DialogTitle>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </header>
                    <Divider />
                    <section className="form-section">
                        <form className="form-unit">
                            <div className="input-unit">
                                <label input-label>First Name</label>
                                <input className="input" type="text"></input>
                            </div>
                            <div className="input-unit">
                                <label input-label>Last Name</label>
                                <input className="input" type="text"></input>
                            </div>
                            <div className="input-unit">
                                <label input-label>Stage Name</label>
                                <input className="input" type="text"></input>
                            </div>
                            <div id="text-area-unit" className="input-unit">
                                <label>Description</label>
                                <textarea
                                    className="text-area input"
                                    type="text"
                                ></textarea>
                            </div>
                        </form>
                    </section>
                    <section className="photo-upload-section">
                        <label className="file-upload-btn">
                            <FileUploadIcon fontSize="small" /> Click to Upload
                            Profile Thumbnail
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                onChange={onUpload}
                                accept="image/*"
                            ></input>
                        </label>
                    </section>
                    <Collapse in={image}>
                        <section className="image-display-section">
                            <div className="photo-and-text">
                                <img
                                    className="selected-image"
                                    src={
                                        image ? URL.createObjectURL(image) : ''
                                    }
                                    alt=""
                                />
                                <p>{imageName}</p>
                            </div>
                            <DeleteOutline
                                className="photo-delete-icon"
                                onClick={removePhoto}
                            />
                        </section>
                    </Collapse>
                    <section className="checkbox-section">
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Core Member"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Verified Member"
                        />
                    </section>
                    <Divider />
                    <section className="form-buttons-group">
                        <Button variant="outlined" onClick={handleClose}>
                            cancel
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            ok
                        </Button>
                    </section>
                </div>
            </Dialog>
        </div>
    );
};

export default FormDialog;

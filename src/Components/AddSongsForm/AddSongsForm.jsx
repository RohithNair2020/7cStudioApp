import { DeleteOutline } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { Button, Form, Input } from 'antd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import React, { useState } from 'react';
import useStore from '../../store';

const AddSongsForm = (props) => {
    const { onClose } = props;
    const [form] = Form.useForm();
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const addSong = useStore((state) => state.addSong);
    const songs = useStore((state) => state.songs);
    const removePhoto = () => {
        setImage(null);
    };

    const onUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = (values) => {
        console.log('img render', image, values);
        addSong({
            ...values,
            imgPath: image ? URL.createObjectURL(image) : '',
        });
        onClose();
    };

    React.useEffect(() => {
        if (image) {
            setImageName(image.name);
        }
    }, [image]);
    return (
        <div>
            <h2 className="form-title" style={{ marginBottom: '20px' }}>
                Add Song
            </h2>
            <Form layout="vertical" form={form} onFinish={onSubmit}>
                <Form.Item label="Song Name" name="songName">
                    <Input placeholder="Song Name" />
                </Form.Item>
                <Form.Item label="Song Link" name="path">
                    <Input placeholder="URL" />
                </Form.Item>
                <Form.Item label="Song Source" name="source">
                    <Input placeholder="Source Name" />
                </Form.Item>
                <Form.Item name="imgPath">
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
                </Form.Item>
                <Collapse in={image}>
                    <Form.Item>
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
                    </Form.Item>
                </Collapse>
                <Form.Item>
                    <Button type="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddSongsForm;

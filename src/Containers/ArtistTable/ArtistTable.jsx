import React from 'react';
import './artistTable.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar } from '@mui/material';

const ArtistTable = ({ rows }) => {
    return (
        <div>
            <table className="table" cellSpacing="0">
                <thead>
                    <tr>
                        <td className="align-left">ARTIST NAME</td>
                        <td>CORE MEMBER</td>
                        <td>VERIFIED</td>
                        <td>FOLLOWERS</td>
                        <td>ALBUMS/EP</td>
                        <td>CREATED ON</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {[1, 1, 1, 1, 1].map(() => (
                        <tr key={Math.random()}>
                            {[
                                'Artist Name',
                                'True',
                                'True',
                                '820',
                                '5',
                                '17/06/2021',
                                'bin',
                            ].map((text, index) => {
                                if (text === 'Artist Name') {
                                    return (
                                        <td
                                            key={Math.random()}
                                            className="align-left"
                                        >
                                            <Avatar />
                                            {text}
                                        </td>
                                    );
                                } else if (text === 'bin') {
                                    return (
                                        <td key={Math.random()}>
                                            <DeleteOutlineIcon className="bin-icon" />
                                        </td>
                                    );
                                }
                                return <td key={Math.random()}>{text}</td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArtistTable;

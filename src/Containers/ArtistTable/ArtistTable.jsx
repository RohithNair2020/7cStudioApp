import React from 'react';
import './artistTable.css';
import { DeleteOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { IconButton } from '@mui/material';
import { Avatar } from '@mui/material';

const columns = [
    {
        title: '',
        key: 'avatar',
        render: () => (
            <IconButton>
                <Avatar style={{ fontSize: 'medium' }} />
            </IconButton>
        ),
    },
    {
        title: 'ARTIST NAME',
        dataIndex: 'artistName',
        key: 'artistName',
    },
    {
        title: 'CORE MEMBER',
        dataIndex: 'coreMember',
        key: 'coreMember',
    },
    {
        title: 'VERIFIED',
        dataIndex: 'verified',
        key: 'verified',
    },
    {
        title: 'FOLLOWERS',
        dataIndex: 'followers',
        key: 'followers',
    },
    {
        title: 'ALBUMS/EP',
        dataIndex: 'albums',
        key: 'albums',
    },
    {
        title: 'CREATED ON',
        dataIndex: 'createdOn',
        key: 'createdOn',
    },
    {
        title: '',
        key: 'delete',
        render: (_, __, index) => (
            <IconButton onClick={() => {}}>
                <DeleteOutlined style={{ fontSize: 'medium' }} />
            </IconButton>
        ),
    },
];

const data = [
    {
        key: '1',
        artistName: 'Artist Name',
        coreMember: 'Yes',
        verified: 'Yes',
        followers: '820',
        albums: '5',
        createdOn: '06/08/2000',
    },
    {
        key: '2',
        artistName: 'Artist Name',
        coreMember: 'Yes',
        verified: 'Yes',
        followers: '820',
        albums: '5',
        createdOn: '06/08/2000',
    },
    {
        key: '3',
        artistName: 'Artist Name',
        coreMember: 'Yes',
        verified: 'Yes',
        followers: '820',
        albums: '5',
        createdOn: '06/08/2000',
    },
    {
        key: '4',
        artistName: 'Artist Name',
        coreMember: 'Yes',
        verified: 'Yes',
        followers: '820',
        albums: '5',
        createdOn: '06/08/2000',
    },
    {
        key: '5',
        artistName: 'Artist Name',
        coreMember: 'Yes',
        verified: 'Yes',
        followers: '820',
        albums: '5',
        createdOn: '06/08/2000',
    },
];

const ArtistTable = () => {
    return (
        <div className="artist-table-container">
            <Table columns={columns} dataSource={data} />;
        </div>
    );
};

export default ArtistTable;

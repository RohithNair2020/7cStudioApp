import React from 'react';
import './songsTable.css';
import { DeleteOutlined, PlayCircleFilled } from '@ant-design/icons';
import { Table } from 'antd';
import { IconButton } from '@mui/material';
import useStore from '../../store';

const data = [
    {
        key: '1',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
    },
    {
        key: '2',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
    },
    {
        key: '3',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
    },
    {
        key: '4',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
    },
    {
        key: '5',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
    },
    {
        key: '6',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
    },
];

const SongsTable = () => {
    const songs = useStore((state) => state.songs);
    const setActiveSong = useStore((state) => state.setActiveSong);

    const columns = [
        {
            title: 'SONG NAME',
            dataIndex: 'songName',
            key: 'songName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'SOURCE',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'ADDED ON',
            dataIndex: 'addedOn',
            key: 'addedOn',
        },
        {
            title: '',
            key: 'play',
            render: (_, __, index) => (
                <IconButton onClick={() => setActiveSong(songs[index])}>
                    <PlayCircleFilled
                        style={{ fontSize: '30px', color: '#fdb927' }}
                    />
                </IconButton>
            ),
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

    return (
        <div className="songs-table-container">
            <Table columns={columns} dataSource={songs} />;
        </div>
    );
};

export default SongsTable;

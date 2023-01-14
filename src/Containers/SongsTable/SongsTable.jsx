import React from 'react';
import './songsTable.css';
import { Space, Table, Tag } from 'antd';

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
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
        tags: ['nice', 'developer'],
    },
    {
        key: '3',
        songName: 'As It Was',
        source: 'Youtube',
        addedOn: '06/08/2000',
        tags: ['nice', 'developer'],
    },
];

const SongsTable = () => {
    return (
        <div className="songs-table-container">
            <Table columns={columns} dataSource={data} />;
        </div>
    );
};

export default SongsTable;

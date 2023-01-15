import { create } from 'zustand';

const useStore = create((set) => ({
    phone: null,
    requestId: null,
    activeSong: null,
    token: localStorage.getItem('token'),
    songs: [
        {
            key: '1',
            songName: 'As It Was',
            source: 'Youtube',
            addedOn: '06/08/2000',
            imgPath: '/download.jfif',
            path: '/songs/AsItWas.mp3',
        },
        {
            key: '2',
            songName: 'Blinding Lights',
            source: 'Youtube',
            addedOn: '06/08/2000',
            imgPath: '/download2.jfif',
            path: '/songs/BlindingLights.mp3',
        },
        // {
        //     key: '3',
        //     songName: 'Blinding Lights',
        //     source: 'Youtube',
        //     addedOn: '06/08/2000',
        //     imgPath: '/download2.jfif',
        //     path: 'https://newdjsongremix.com/siteuploads/files/sfd3/1493/Levitating%20Mp3%20Song(NewDjSongRemix).mp3',
        // },
    ],
    setPhone: (phone) => set({ phone }),
    setRequestId: (requestId) => set({ requestId }),
    setToken: (token) => set({ token }),
    setActiveSong: (song) => set({ activeSong: song }),
    addSong: (song) =>
        set((state) => ({
            songs: [...state.songs, { ...song, addedOn: '06/08/2000' }],
        })),
}));

export default useStore;

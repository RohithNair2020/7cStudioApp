import React, { useEffect, useRef, useState } from 'react';
import {
    StepBackwardOutlined,
    StepForwardOutlined,
    PauseOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';
import useStore from '../../store';
import './trackbar.css';
import { IconButton, Slider } from '@mui/material';

const styles = {
    controlButtonIcon: {
        fontSize: '30px',
        color: 'black',
    },
};

const Trackbar = () => {
    const activeSong = useStore((state) => state.activeSong);
    console.log('song now', activeSong);
    const [playing, setPlaying] = useState(false);
    const [position, setPosition] = useState(0);
    const audioRef = useRef(new Audio(activeSong?.path));
    const intervalRef = useRef();
    const isReady = useRef(false);
    const { duration } = audioRef.current;

    // const toPrevTrack = () => {
    // if (trackIndex - 1 < 0) {
    //     setTrackIndex(tracks.length - 1);
    //   } else {
    //     setTrackIndex(trackIndex - 1);
    //   }
    //   }

    //   const toNextTrack = () => {
    // if (trackIndex < tracks.length - 1) {
    //     setTrackIndex(trackIndex + 1);
    //   } else {
    //     setTrackIndex(0);
    //   }
    //   }

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setPosition(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!playing) {
            setPlaying(true);
        }
        startTimer();
    };

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setPosition(audioRef.current.currentTime);
                // position = position.current + audioRef.current.currentTime;
            }
        }, [50]);
    };

    useEffect(() => {
        console.log('ref', audioRef);
        if (playing) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [playing]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(activeSong?.path);
        setPosition(audioRef.current.currentTime);
        if (isReady.current) {
            audioRef.current.play();
            setPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [activeSong]);

    // Handle setup when changing tracks
    // useEffect(() => {
    //     audioRef.current.pause();

    //     audioRef.current = new Audio(audioSrc);
    //     setTrackProgress(audioRef.current.currentTime);

    //     if (isReady.current) {
    //         audioRef.current.play();
    //         setIsPlaying(true);
    //         startTimer();
    //     } else {
    //         // Set the isReady ref as true for the next pass
    //         isReady.current = true;
    //     }
    // }, [trackIndex]);

    return (
        <div className="trackbar-container">
            <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                max={
                    audioRef.current.duration ? audioRef.current.duration : 100
                }
                color="secondary"
                sx={{
                    position: 'absolute',
                    top: '-12px',
                    maxWidth: '98%',
                    boxSizing: 'border-box',
                }}
            />
            <div style={{ display: 'none' }}>
                {/* <audio ref={audioRef} src="/songs/AsItWas.mp3" /> */}
            </div>
            <div className="song-details">
                <img
                    className="song-cover-image"
                    src={activeSong?.imgPath}
                    alt="song-cover-photo"
                />
                <h4 className="song-name">As It Was</h4>
            </div>
            <div className="song-controlls">
                <IconButton>
                    <StepBackwardOutlined style={styles.controlButtonIcon} />
                </IconButton>
                <IconButton onClick={() => setPlaying(!playing)}>
                    {playing ? (
                        <PauseOutlined style={styles.controlButtonIcon} />
                    ) : (
                        <CaretRightOutlined style={styles.controlButtonIcon} />
                    )}
                </IconButton>
                <IconButton>
                    <StepForwardOutlined style={styles.controlButtonIcon} />
                </IconButton>
            </div>
            {/* <button onClick={() => setActiveSong(null)}>Close me</button> */}
        </div>
    );
};

export default Trackbar;

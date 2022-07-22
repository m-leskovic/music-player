import './Player.css';
import Controls from './Controls';
import data from '../Data'
import { useRef, useState, useEffect } from 'react';

const Player = () => {
    const audioRef = useRef(null);
    const [ currentSong, setCurrentSong ] = useState(0);
    const [ playingNow, setPlayingNow ] = useState(false);
    const play = () => {
        let playing = playingNow ? audioRef.current.play() : audioRef.current.pause();
        return playing;
    }
    useEffect(() => {
        play();
    });
    return (
        <div id="player-info">
            <img id="album" src={data[currentSong].album} alt="Album cover" />
            <p id="song">{data[currentSong].song}</p>
            <p id="artist">{data[currentSong].artist}</p>
            <audio src={data[currentSong].source} ref={audioRef}></audio>
            <Controls
                playingNow={playingNow}
                setPlayingNow={setPlayingNow}
                currentSong= {currentSong}
                setCurrentSong={setCurrentSong}
            />
        </div>
    )
}

export default Player
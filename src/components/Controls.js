import './Controls.css';
import data from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faPause, faForward } from '@fortawesome/free-solid-svg-icons';

const Controls = props => {
    const { playingNow, setPlayingNow, currentSong, setCurrentSong } = props;
    const skipForward = () => {
        setCurrentSong(() => {
            let temp = currentSong;
            let fwd = (temp + 1 > data.length - 1) ? 0 : temp + 1;
            return fwd;
        });
    }
    const skipBackward = () => {
        setCurrentSong(() => {
            let temp = currentSong;
            let bkw = (temp - 1 > 0) ? temp - 1
                    : (temp - 1 < 0) ? data.length - 1
                    : 0;
            return bkw;
        });
    }
    return (
        <div>
            <button id="backward" onClick={skipBackward}>
                <FontAwesomeIcon className="fa" icon={faBackward} />
            </button>
            <button id="play" onClick={() => setPlayingNow(!playingNow)}>
                <FontAwesomeIcon icon={playingNow? faPause : faPlay} />
            </button>
            <button id="forward" onClick={skipForward}>
                <FontAwesomeIcon className="fa" icon={faForward} />
            </button>
        </div>
    )
}

export default Controls
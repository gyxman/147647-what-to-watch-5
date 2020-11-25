import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, setDuration} = this.props;

    const video = this._videoRef.current;

    video.src = src;

    video.oncanplaythrough = () => setDuration(video.duration);
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
  }

  componentDidUpdate() {
    const {isPlaying, updateTime, currentTime} = this.props;

    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();

      if (video.currentTime === 0 && currentTime !== 0) {
        video.currentTime = currentTime;
      }

      // video.addEventListener(`progress`, function (e) {
      //   updateTime(e.target.currentTime);
      // });
    } else {
      video.load();
    }
  }

  renderShortPlayer() {
    const {poster, onMouseEnter, onMouseLeave} = this.props;

    return <video style={{width: `100%`, height: `100%`}}
      ref={this._videoRef}
      poster={poster}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />;
  }

  renderFullSizePlayer() {
    const {poster, closeFullSize, playFullSize, pauseFullSize, isPlaying, currentTime, duration} = this.props;

    console.log(duration);

    return <div className="player">
      <video ref={this._videoRef}
        poster={poster} className="player__video" />

      <button onClick={closeFullSize} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={duration ? currentTime / duration * 100 : 0} max="100" />
            <div className="player__toggler" style={{left: `${currentTime / duration * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button onClick={() => isPlaying ? pauseFullSize() : playFullSize()} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`} />
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>;
  }

  render() {
    const {isFullSize} = this.props;

    if (isFullSize || 1) {
      return this.renderFullSizePlayer();
    }

    return this.renderShortPlayer();
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isFullSize: PropTypes.bool.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closeFullSize: PropTypes.func.isRequired,
  playFullSize: PropTypes.func.isRequired,
  pauseFullSize: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
};

export default VideoPlayer;

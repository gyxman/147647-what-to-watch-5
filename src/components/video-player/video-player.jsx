import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent { // TODO решить проблему с плеерами
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {src} = this.props;

    const video = this._videoRef.current;

    video.src = src;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {poster, onMouseEnter, onMouseLeave, isFullSize, closeFullSize} = this.props;

    if (isFullSize) {
      return <FullSizePlayer videoRef={this._videoRef} poster={poster} closeFullSize={closeFullSize} />;
    }

    return <ShortPlayer videoRef={this._videoRef} poster={poster} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>;
  }
}

function ShortPlayer(props) {
  const {videoRef, poster, onMouseEnter, onMouseLeave} = props;

  return <video style={{width: `100%`, height: `100%`}}
    ref={videoRef}
    poster={poster}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  />;
}

ShortPlayer.propTypes = {
  videoRef: PropTypes.any.isRequired, // TODO перенести в компонент
  poster: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

function FullSizePlayer(props) {
  const {videoRef, poster, closeFullSize} = props;

  return <div className="player">
    <video ref={videoRef}
      poster={poster} className="player__video" />

    <button onClick={closeFullSize} type="button" className="player__exit">Exit</button>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="30" max="100" />
          <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
        </div>
        <div className="player__time-value">1:30:29</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
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

FullSizePlayer.propTypes = {
  videoRef: PropTypes.any.isRequired, // TODO перенести в компонент
  poster: PropTypes.string.isRequired,
  closeFullSize: PropTypes.func.isRequired,
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isFullSize: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closeFullSize: PropTypes.func.isRequired,
  playFullSize: PropTypes.func.isRequired,
  pauseFullSize: PropTypes.func.isRequired,
};

export default VideoPlayer;

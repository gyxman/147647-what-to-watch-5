import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import VideoPlayerTime from "../video-player-time/video-player-time";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._fullVideoRef = createRef();
    this.getFullVideoRef = this.getFullVideoRef.bind(this);
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    const fullVideo = this._fullVideoRef.current;

    if (video) {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
    }

    if (fullVideo) {
      fullVideo.oncanplaythrough = null;
      fullVideo.onplay = null;
      fullVideo.onpause = null;
    }
  }

  componentDidUpdate() {
    const {isPlaying, isFullSize, src, previewSrc, isFullSizeVideo, openFullSizeVideoDone} = this.props;

    if (isFullSize) {
      const fullVideo = this._fullVideoRef.current;
      fullVideo.src = src;

      if (isPlaying) {
        fullVideo.play();

        // if (video.currentTime === 0 && currentTime !== 0) {
        //   video.currentTime = currentTime;
        // }
        //
        // fullVideo.addEventListener(`progress`, function (e) {
        //   updateTime(e.target.currentTime);
        // });
      } else {
        fullVideo.load();
      }

      if (isFullSizeVideo) {
        fullVideo.requestFullscreen().then(openFullSizeVideoDone);
      }
    } else {
      const video = this._videoRef.current;
      video.src = previewSrc;

      if (isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  getFullVideoRef() {
    return this._fullVideoRef;
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
    const {poster, closeFullSize, playFullSize, pauseFullSize, isPlaying, isLoading, onLoaded, openFullSizeVideo} = this.props;

    return <div className="player">
      <video ref={this._fullVideoRef}
        poster={poster} className="player__video" />

      <button onClick={closeFullSize} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <VideoPlayerTime getVideo={this.getFullVideoRef} onLoaded={onLoaded} />
        </div>

        <div className="player__controls-row">
          <button onClick={() => isPlaying ? pauseFullSize() : playFullSize()} type="button" className="player__play" disabled={isLoading}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`} />
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button onClick={openFullSizeVideo} type="button" className="player__full-screen">
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

    if (isFullSize) {
      return this.renderFullSizePlayer();
    }

    return this.renderShortPlayer();
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previewSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullSize: PropTypes.bool.isRequired,
  isFullSizeVideo: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closeFullSize: PropTypes.func.isRequired,
  playFullSize: PropTypes.func.isRequired,
  pauseFullSize: PropTypes.func.isRequired,
  onLoaded: PropTypes.func.isRequired,
  openFullSizeVideo: PropTypes.func.isRequired,
  openFullSizeVideoDone: PropTypes.func.isRequired,
};

export default VideoPlayer;

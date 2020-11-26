import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setCurrentMovieDuration, setCurrentMovieTime} from "../../store/action";

const VideoPlayerTime = (props) => {
  const {getVideo, onLoaded, duration, currentTime, setDuration, setTime} = props;

  setTimeout(() => {
    const video = getVideo().current;

    video.oncanplaythrough = (e) => {
      onLoaded();
      setDuration(e.target.duration);
    };

    video.addEventListener(`progress`, function (e) {
      const time = e.target.currentTime;
      if (Math.floor(time) > currentTime) {
        setTime(time);
      }
    });
  }, 0);


  return <React.Fragment>
    <div className="player__time">
      <progress className="player__progress" value={duration ? currentTime / duration * 100 : 0} max="100"/>
      <div className="player__toggler" style={{left: `${currentTime / duration * 100}%`}}>Toggler</div>
    </div>
    <div className="player__time-value">1:30:29</div>
  </React.Fragment>;
};

VideoPlayerTime.propTypes = {
  getVideo: PropTypes.func.isRequired,
  onLoaded: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  duration: PROCESS.currentMovieDuration,
  currentTime: PROCESS.currentMovieTime
});

const mapDispatchToProps = (dispatch) => ({
  setDuration(duration) {
    dispatch(setCurrentMovieDuration(duration));
  },
  setTime(time) {
    dispatch(setCurrentMovieTime(time));
  },
});

export {VideoPlayerTime};
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerTime);

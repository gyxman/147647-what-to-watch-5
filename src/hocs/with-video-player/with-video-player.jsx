import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullSize: false,
      };

      this.timerId = null;
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
      this.openFullSize = this.openFullSize.bind(this);
      this.closeFullSize = this.closeFullSize.bind(this);
      this.playFullSize = this.playFullSize.bind(this);
      this.pauseFullSize = this.pauseFullSize.bind(this);
    }

    mouseEnter() {
      this.timerId = setTimeout(() => {
        this.setState({isPlaying: true});
      }, 1000);
    }
    mouseLeave() {
      clearTimeout(this.timerId);
      this.setState({isPlaying: false});
    }

    openFullSize() {
      this.setState({isFullSize: true, isPlaying: true});
    }

    closeFullSize() {
      this.setState({isFullSize: false, isPlaying: false});
    }

    playFullSize() {
      this.setState({isPlaying: true});
    }

    pauseFullSize() {
      this.setState({isPlaying: false});
    }

    render() {
      const {isPlaying, isFullSize} = this.state;

      return <Component
        {...this.props}
        openFullSize={this.openFullSize}
        renderPlayer={(src, poster) => {
          return (
            <VideoPlayer
              src={src}
              isPlaying={isPlaying}
              isFullSize={isFullSize}
              poster={poster}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              closeFullSize={this.closeFullSize}
              playFullSize={this.playFullSize}
              pauseFullSize={this.pauseFullSize}
            />
          );
        }}
      />;
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;

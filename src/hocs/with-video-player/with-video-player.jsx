import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullSize: false,
        isLoading: true,
        isFullSizeVideo: false,
      };

      this.timerId = null;
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
      this.openFullSize = this.openFullSize.bind(this);
      this.openFullSizeVideo = this.openFullSizeVideo.bind(this);
      this.openFullSizeVideoDone = this.openFullSizeVideoDone.bind(this);
      this.closeFullSize = this.closeFullSize.bind(this);
      this.playFullSize = this.playFullSize.bind(this);
      this.pauseFullSize = this.pauseFullSize.bind(this);
      this.onLoaded = this.onLoaded.bind(this);
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
      this.setState({isFullSize: true});
    }

    openFullSizeVideo() {
      this.setState({isFullSizeVideo: true});
    }

    openFullSizeVideoDone() {
      this.setState({isFullSizeVideo: false});
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

    onLoaded() {
      this.setState({isLoading: false});
    }

    render() {
      const {isPlaying, isFullSize, isLoading, isFullSizeVideo} = this.state;

      return <Component
        {...this.props}
        openFullSize={this.openFullSize}
        renderPlayer={(src, poster, previewSrc) => {
          return (
            <VideoPlayer
              src={src}
              poster={poster}
              previewSrc={previewSrc}
              isPlaying={isPlaying}
              isFullSize={isFullSize}
              isLoading={isLoading}
              isFullSizeVideo={isFullSizeVideo}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              closeFullSize={this.closeFullSize}
              playFullSize={this.playFullSize}
              pauseFullSize={this.pauseFullSize}
              onLoaded={this.onLoaded}
              openFullSizeVideo={this.openFullSizeVideo}
              openFullSizeVideoDone={this.openFullSizeVideoDone}
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

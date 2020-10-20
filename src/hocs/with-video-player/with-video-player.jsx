import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.timerId = null;
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
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

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, poster) => {
          return (
            <VideoPlayer
              src={src}
              isPlaying={isPlaying}
              poster={poster}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
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

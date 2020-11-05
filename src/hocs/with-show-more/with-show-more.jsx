import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import MoviePropType from "../../proptypes/movie-proptypes";

const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentStep: 1,
        showButton: false,
      };

      this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
      const {limit, movies} = this.props;

      this.setState((prevState) => ({currentStep: prevState.currentStep + 1, showButton: limit * (prevState.currentStep + 1) < movies.length}));
    }

    componentDidMount() {
      const {limit, movies} = this.props;

      this.setState((prevState) => ({showButton: limit * prevState.currentStep < movies.length}));
    }

    render() {
      const {currentStep, showButton} = this.state;

      return <Component
        {...this.props}
        currentStep={currentStep}
        showButton={showButton}
        onButtonClick={this.onButtonClick}
      />;
    }
  }

  WithShowMore.propTypes = {
    limit: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(
        PropTypes.shape(MoviePropType)
    ).isRequired
  };

  return WithShowMore;
};

export default withShowMore;

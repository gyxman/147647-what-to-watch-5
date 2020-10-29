import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MoviePropType from "../../proptypes/movie-proptypes";
import ShowMoreButton from "../show-more-button/show-more-button";
import MoviesList from "../movies-list/movies-list";

class MoviesWithShowMoreButton extends PureComponent {
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
    const {limit, movies} = this.props;
    const {currentStep, showButton} = this.state;

    return <React.Fragment>
      <MoviesList movies={movies.slice(0, limit * currentStep)} />

      {showButton &&
      <ShowMoreButton onClick={this.onButtonClick} />
      }
    </React.Fragment>;
  }
}

MoviesWithShowMoreButton.propTypes = {
  limit: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired
};

export default MoviesWithShowMoreButton;

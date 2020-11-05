import React from 'react';
import PropTypes from 'prop-types';
import MoviePropType from "../../proptypes/movie-proptypes";
import ShowMoreButton from "../show-more-button/show-more-button";
import MoviesList from "../movies-list/movies-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MoviesListWrapper = withActiveItem(MoviesList);

const MoviesWithShowMoreButton = (props) => {
  const {limit, movies, currentStep, showButton, onButtonClick} = props;

  return <React.Fragment>
    <MoviesListWrapper movies={movies.slice(0, limit * currentStep)} />

    {showButton &&
      <ShowMoreButton onClick={onButtonClick} />
    }
  </React.Fragment>;
};

MoviesWithShowMoreButton.propTypes = {
  limit: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  showButton: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default MoviesWithShowMoreButton;

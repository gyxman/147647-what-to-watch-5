import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card";
import MoviePropType from "../../proptypes/movie-proptypes";

const MoviesList = (props) => {
  const {movies, handleAction} = props;

  return <div className="catalog__movies-list">
    {movies.map((movie) => (<MovieCard key={movie.id + movie.name} movie={movie} onHover={handleAction} />))}
  </div>;

};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired,
  handleAction: PropTypes.func.isRequired
};

export default MoviesList;

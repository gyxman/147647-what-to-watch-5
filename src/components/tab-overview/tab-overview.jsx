import React from "react";
import PropTypes from "prop-types";
import MoviePropType from "../../proptypes/movie-proptypes";
import {getTextForRating} from "../../utils";

const TabOverview = (props) => {
  const {movie} = props;

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{movie.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getTextForRating(movie.rating)}</span>
        <span className="movie-rating__count">{movie.scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{movie.description}</p>

      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {movie.starring.slice(0, 3).join(`, `)} and
        other</strong></p>
    </div>
  </React.Fragment>;
};

TabOverview.propTypes = {
  movie: PropTypes.shape(MoviePropType).isRequired
};

export default TabOverview;

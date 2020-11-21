import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MoviePropType from "../../proptypes/movie-proptypes";

const MovieCard = (props) => {
  const {movie: {id, name, posterImage}, onHover} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onHover(id)} onMouseLeave={() => onHover(null)}>
    <div className="small-movie-card__image">
      <img src={posterImage} alt={name}
        width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={`films/` + id}>{name}</Link>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  movie: PropTypes.shape(MoviePropType),
  onHover: PropTypes.func.isRequired,
};

export default MovieCard;

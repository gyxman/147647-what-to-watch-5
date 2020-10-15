import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card";
import MoviePropType from "../../proptypes/movie-proptypes";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);

    this.state = {
      activeMovie: null,
    };
  }

  handleHover(id) {
    this.setState(() => ({activeMovie: id}));
  }

  render() {
    const {movies} = this.props;

    return <React.Fragment>
      {movies.map((movie) => (<MovieCard key={movie.id + movie.name} movie={movie} onHover={this.handleHover} />))}
    </React.Fragment>;
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired
};

export default MoviesList;

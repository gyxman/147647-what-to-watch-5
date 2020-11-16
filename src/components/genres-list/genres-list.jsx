import React from "react";
import {changeGenreAction} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ALL_GENRES} from "../../const";

const GenresList = (props) => {
  const {activeGenre, genres, changeGenre} = props;

  const genresList = [ALL_GENRES].concat(genres);

  return <ul className="catalog__genres-list">
    {genresList.map((genre, index) =>
      (<li key={index + genre}
        className={`catalog__genres-item ${genre === activeGenre && `catalog__genres-item--active`}`}>
        <a href="#" className="catalog__genres-link" onClick={(e) => {
          e.preventDefault();
          changeGenre(genre);
        }}>
          {genre}
        </a>
      </li>))}
  </ul>;
};

const mapStateToProps = (state) => ({
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(changeGenreAction(genre));
  },
});

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  changeGenre: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

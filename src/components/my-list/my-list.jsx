import React from "react";
import {MOVIES_LIMIT} from "../../const";
import withShowMore from "../../hocs/with-show-more/with-show-more";
import MoviesWithShowMoreButton from "../movies-with-show-more-button/movies-with-show-more-button";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MoviePropType from "../../proptypes/movie-proptypes";

const MoviesWithShowMoreButtonWrapped = withShowMore(MoviesWithShowMoreButton);

const MyList = (props) => {
  const {movies} = props;

  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MoviesWithShowMoreButtonWrapped movies={movies} limit={MOVIES_LIMIT}/>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

MyList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {MyList};
export default connect(mapStateToProps)(MyList);

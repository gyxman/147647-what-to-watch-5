import React from 'react';
import PropTypes from 'prop-types';
import GenresList from "../genres-list/genres-list";
import {connect} from "react-redux";
import MoviesWithShowMoreButton from "../movies-with-show-more-button/movies-with-show-more-button";
import {AppRoute, AuthorizationStatus, MOVIES_LIMIT} from "../../const";
import withShowMore from "../../hocs/with-show-more/with-show-more";
import MoviePropType from "../../proptypes/movie-proptypes";
import {getMoviesByGenre} from "../../store/selectors";
import {Link} from "react-router-dom";

const MoviesWithShowMoreButtonWrapped = withShowMore(MoviesWithShowMoreButton);

const Main = (props) => {
  const {movies, authorizationStatus} = props;
  const movie = movies[0];

  return <React.Fragment>
    <section className="movie-card">

      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
            : <Link className="user-block__link" to={AppRoute.LOGIN}>Sign in</Link>
          }
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movie.genre}</span>
              <span className="movie-card__year">{movie.date}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList genres={[]}/>

        <MoviesWithShowMoreButtonWrapped movies={movies} limit={MOVIES_LIMIT}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state),
  authorizationStatus: state.USER.authorizationStatus,
});

export {Main};
export default connect(mapStateToProps)(Main);

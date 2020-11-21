import React from 'react';
import PropTypes from 'prop-types';
import GenresList from "../genres-list/genres-list";
import {connect} from "react-redux";
import MoviesWithShowMoreButton from "../movies-with-show-more-button/movies-with-show-more-button";
import {MOVIES_LIMIT} from "../../const";
import withShowMore from "../../hocs/with-show-more/with-show-more";
import MoviePropType from "../../proptypes/movie-proptypes";
import {getMoviesByActiveGenre} from "../../store/selectors";
import Header from "../header/header";
import {addMovieToFavoritesAction} from "../../store/action";
import Footer from "../footer/footer";

const MoviesWithShowMoreButtonWrapped = withShowMore(MoviesWithShowMoreButton);

const Main = (props) => {
  const {movies, promoMovie, addMovieToFavorites} = props;

  return <React.Fragment>
    <section className="movie-card">

      <div className="movie-card__bg">
        <img src={promoMovie.backgroundImage} alt={promoMovie.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className={`movie-card__head`} />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.posterImage} alt={promoMovie.name} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button onClick={() => addMovieToFavorites(promoMovie)} className="btn btn--list movie-card__button" type="button">
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

        <GenresList />

        <MoviesWithShowMoreButtonWrapped movies={movies} limit={MOVIES_LIMIT}/>
      </section>

      <Footer />
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired,
  promoMovie: PropTypes.shape(MoviePropType),
  addMovieToFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: getMoviesByActiveGenre(state),
  promoMovie: state.DATA.promoMovie,
});

const mapDispatchToProps = (dispatch) => ({
  addMovieToFavorites(movie) {
    dispatch(addMovieToFavoritesAction(movie));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

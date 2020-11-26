import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withShowMore from "../../hocs/with-show-more/with-show-more";
import MoviesWithShowMoreButton from "../movies-with-show-more-button/movies-with-show-more-button";
import {AppRoute, MOVIES_LIMIT_FOR_RELATED} from "../../const";
import MoviePropType from "../../proptypes/movie-proptypes";
import {connect} from "react-redux";
import {addMovieToFavorite, fetchMovieById} from "../../store/api-actions";
import {Link} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import {getMoviesByGenre} from "../../utils";
import {checkMovieInFavoriteList} from "../../store/selectors";

const TabsWrapped = withActiveItem(Tabs);
const MoviesWithShowMoreButtonWrapped = withShowMore(MoviesWithShowMoreButton);

const Movie = (props) => {
  const {renderPlayer, openFullSize, movies, movie, authorizationStatus, onLoad, addMovieToFavorites, inFavoriteList} = props;

  function renderMovie() {
    const path = window.location.pathname.split(`/`);
    const id = path[path.length - 1];

    if (!movie || movie.id !== Number(id)) {
      onLoad(id);

      return `Загрузка...`;
    }

    return <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={`movie-card__head`}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={openFullSize} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={() => addMovieToFavorites(movie.id, Number(!inFavoriteList))} className="btn btn--list movie-card__button"
                  type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={inFavoriteList ? `#in-list` : `#add`}/>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus &&
                <Link className="btn movie-card__button" to={(location) => `${location.pathname}${AppRoute.REVIEW}`}>Add
                  review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {renderPlayer(movie.videoLink, movie.posterImage, movie.previewVideoLink)}
            </div>

            <div className="movie-card__desc">
              <TabsWrapped movie={movie}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesWithShowMoreButtonWrapped movies={getMoviesByGenre(movies, movie.genre)}
            limit={MOVIES_LIMIT_FOR_RELATED}/>
        </section>

        <Footer/>
      </div>
    </Fragment>;
  }

  return renderMovie();
};

Movie.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  openFullSize: PropTypes.func.isRequired,
  movie: PropTypes.shape(MoviePropType),
  movies: PropTypes.arrayOf(PropTypes.shape(MoviePropType)),
  authorizationStatus: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
  addMovieToFavorites: PropTypes.func.isRequired,
  inFavoriteList: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.DATA.movies,
  movie: state.PROCESS.currentMovie,
  authorizationStatus: state.USER.authorizationStatus,
  inFavoriteList: checkMovieInFavoriteList(state.PROCESS.currentMovie ? state.PROCESS.currentMovie.id : 0)(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchMovieById(id));
  },
  addMovieToFavorites(id, status) {
    dispatch(addMovieToFavorite(id, status));
  },
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);

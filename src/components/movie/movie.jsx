import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withShowMore from "../../hocs/with-show-more/with-show-more";
import MoviesWithShowMoreButton from "../movies-with-show-more-button/movies-with-show-more-button";
import {MOVIES_LIMIT} from "../../const";
import MoviePropType from "../../proptypes/movie-proptypes";
import {connect} from "react-redux";
import {fetchMovieById} from "../../store/api-actions";

const TabsWrapped = withActiveItem(Tabs);
const MoviesWithShowMoreButtonWrapped = withShowMore(MoviesWithShowMoreButton);

const Movie = (props) => {
  const {renderPlayer, openFullSize, movie, onLoad} = props;

  function renderMovie() {
    if (!movie) {
      const path = window.location.pathname;
      const id = path[path.length - 1];
      onLoad(id);

      return `Загрузка...`;
    }

    return <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={openFullSize} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {renderPlayer(`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, `/img/the-grand-budapest-hotel-poster.jpg`)}
            </div>

            <div className="movie-card__desc">
              <TabsWrapped />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesWithShowMoreButtonWrapped movies={[]} limit={MOVIES_LIMIT} />
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
      </div>
    </Fragment>;
  }

  return renderMovie();
};

Movie.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  openFullSize: PropTypes.func.isRequired,
  movie: PropTypes.shape(MoviePropType),
  onLoad: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  movie: DATA.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchMovieById(id));
  }
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);

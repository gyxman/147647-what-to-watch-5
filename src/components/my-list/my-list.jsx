import React from "react";
import {MOVIES_LIMIT} from "../../const";
import withShowMore from "../../hocs/with-show-more/with-show-more";
import MoviesWithShowMoreButton from "../movies-with-show-more-button/movies-with-show-more-button";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MoviePropType from "../../proptypes/movie-proptypes";
import Footer from "../footer/footer";
import Header from "../header/header";

const MoviesWithShowMoreButtonWrapped = withShowMore(MoviesWithShowMoreButton);

const MyList = (props) => {
  const {favoriteMovies} = props;

  return <div className="user-page">
    <Header className={`user-page__head`} render={() => {
      return <h1 className="page-title user-page__title">My list</h1>;
    }}/>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MoviesWithShowMoreButtonWrapped movies={favoriteMovies} limit={MOVIES_LIMIT}/>
    </section>

    <Footer/>
  </div>;
};

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favoriteMovies: DATA.favoriteMovies,
});

export {MyList};
export default connect(mapStateToProps)(MyList);

import React from 'react';
import AddReviewForm from "../add-review-form/add-review-form";
import Header from "../header/header";
import {connect} from "react-redux";
import {fetchMovieById, sendNewComment} from "../../store/api-actions";
import PropTypes from "prop-types";
import MoviePropType from "../../proptypes/movie-proptypes";
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import SweetAlert from 'sweetalert2-react';
import {removeErrorAction} from "../../store/action";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const AddReviewFormWrapped = withReviewForm(withActiveItem(AddReviewForm));

const AddReview = (props) => {
  const {movie, onLoad, onSubmit, error, removeError} = props;

  function renderReview() {
    const path = window.location.pathname.split(`/`);
    const id = path[path.length - 2];

    if (!movie || movie.id !== Number(id)) {
      onLoad(id);

      return `Загрузка...`;
    }

    return <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundImage} alt={movie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header render={() => {
          return <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.MOVIES}/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>;
        }}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.posterImage} alt={movie.name} width="218"
            height="327"/>
        </div>
      </div>

      <AddReviewFormWrapped onSubmit={(data) => onSubmit(movie.id, data)}/>

      <SweetAlert
        show={error && error.length}
        title="Ошибка"
        text={error}
        onConfirm={() => removeError()}
      />
    </section>;
  }

  return renderReview();
};

AddReview.propTypes = {
  movie: PropTypes.shape(MoviePropType).isRequired,
  onLoad: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  removeError: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = ({PROCESS}) => ({
  movie: PROCESS.currentMovie,
  error: PROCESS.error
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchMovieById(id));
  },
  onSubmit(id, commentData) {
    dispatch(sendNewComment(id, commentData));
  },
  removeError() {
    dispatch(removeErrorAction());
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

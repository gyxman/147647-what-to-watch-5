import React from "react";
import PropTypes from "prop-types";
import MoviePropType from "../../proptypes/movie-proptypes";
import {fetchCommentsById} from "../../store/api-actions";
import {connect} from "react-redux";
import {formatDate, formatDateToTime} from "../../utils";

const TabReviews = (props) => {
  const {movie, onLoadComments, comments} = props;

  function renderComment(comment, index) {
    return <div key={comment.comment.slice(0, 2) + index} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={formatDateToTime(comment.date)}>
            {formatDate(comment.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>;
  }

  function renderComments() {
    if (!comments.length) {
      onLoadComments(movie.id);

      return `Загрузка...`;
    }

    return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.map((comment, index) => {
          if (index % 2 === 0) {
            return renderComment(comment, index);
          }

          return null;
        })}
      </div>
      <div className="movie-card__reviews-col">
        {comments.map((comment, index) => {
          if (index % 2 !== 0) {
            return renderComment(comment, index);
          }

          return null;
        })}
      </div>
    </div>;
  }

  return renderComments();
};

TabReviews.propTypes = {
  movie: PropTypes.shape(MoviePropType).isRequired,
  onLoadComments: PropTypes.func.isRequired
};

const mapStateToProps = ({PROCESS}) => ({
  comments: PROCESS.commentsForCurrentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(id) {
    dispatch(fetchCommentsById(id));
  },
});

export {TabReviews};
export default connect(mapStateToProps, mapDispatchToProps)(TabReviews);

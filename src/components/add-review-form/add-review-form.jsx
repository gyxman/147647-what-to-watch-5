import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendNewComment} from "../../store/api-actions";

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      comment: null
    };

    this.ratings = new Array(5).fill(Math.random());

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {rating, comment} = this.state;
    const {onSubmit} = this.props;

    onSubmit({id: 1, rating: rating * 2, comment});
  }

  handleFieldChange(event) {
    const {name, value} = event.target;

    this.setState(() => ({[name]: value}));
  }

  render() {
    const {activeItem, handleAction} = this.props;

    return <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {this.ratings.map((val, index) =>
              (<React.Fragment key={index + val}>
                <input className="rating__input" id={`star-${++index}`} type="radio" name="rating" value={index}
                  onChange={this.handleFieldChange} onClick={() => handleAction(index)}
                  checked={index === activeItem}/>
                <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
              </React.Fragment>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="comment" id="comment" placeholder="Review text"
            onChange={this.handleFieldChange}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>;
  }
}

AddReviewForm.propTypes = {
  activeItem: PropTypes.number,
  handleAction: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(sendNewComment(commentData));
  }
});

export {AddReviewForm};
export default connect(null, mapDispatchToProps)(AddReviewForm);

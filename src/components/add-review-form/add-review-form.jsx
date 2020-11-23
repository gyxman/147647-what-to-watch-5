import React from "react";
import PropTypes from "prop-types";

const AddReviewForm = (props) => {
  const {handleFieldChange, handleSubmit, isLocked, handleAction, activeItem} = props;

  const ratings = [1, 2, 3, 4, 5];

  return <div className="add-review">
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratings.map((val, index) =>
            (<React.Fragment key={index + val}>
              <input className="rating__input" id={`star-${++index}`} type="radio" name="rating" value={index}
                onChange={handleFieldChange} onClick={() => handleAction(index)}
                checked={activeItem ? index === activeItem : index === 5}/>
              <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
            </React.Fragment>))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="comment" id="comment" placeholder="Review text"
          onChange={handleFieldChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isLocked}>Post</button>
        </div>

      </div>
    </form>
  </div>;
};

AddReviewForm.propTypes = {
  handleFieldChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLocked: PropTypes.bool.isRequired,
  handleAction: PropTypes.func.isRequired,
  activeItem: PropTypes.number,
};

export default AddReviewForm;

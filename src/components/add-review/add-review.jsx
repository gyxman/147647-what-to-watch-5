import React from 'react';
import AddReviewForm from "../add-review-form/add-review-form";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Header from "../header/header";

const AddReviewFormWrapped = withActiveItem(AddReviewForm);

const AddReview = () => {
  return <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header render={() => {
        return <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>;
      }} />

      <div className="movie-card__poster movie-card__poster--small">
        <img src="/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>
    </div>

    <AddReviewFormWrapped />

  </section>;
};

export default AddReview;

import React from "react";
import PropTypes from "prop-types";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";
import MoviePropType from "../../proptypes/movie-proptypes";

const Tabs = (props) => {
  const {activeItem, handleAction, movie} = props;

  const tabs = [`Overview`, `Details`, `Reviews`];

  const renderTab = (index) => {
    const tabsComponents = [
      {component: <TabOverview movie={movie} />},
      {component: <TabDetails movie={movie} />},
      {component: <TabReviews movie={movie} />},
    ];

    return tabsComponents[index].component;
  };

  return <React.Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, index) =>
          (<li key={index + tab} className={`movie-nav__item ${index === (activeItem || 0) && `movie-nav__item--active`}`}>
            <a href="#" className="movie-nav__link" onClick={(e) => {
              e.preventDefault();
              handleAction(index);
            }}>
              {tab}
            </a>
          </li>))}
      </ul>
    </nav>

    {renderTab(activeItem || 0)}
  </React.Fragment>;

};

Tabs.propTypes = {
  activeItem: PropTypes.number,
  handleAction: PropTypes.func.isRequired,
  movie: PropTypes.shape(MoviePropType).isRequired
};

export default Tabs;

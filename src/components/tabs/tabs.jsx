import React from "react";
import PropTypes from "prop-types";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

const Tabs = (props) => {
  const {activeItem, handleAction} = props;

  const tabs = [`Overview`, `Details`, `Reviews`];

  const renderTab = (index) => {
    const tabsComponents = [
      {component: <TabOverview/>},
      {component: <TabDetails/>},
      {component: <TabReviews/>},
    ];

    return tabsComponents[index].component;
  };

  return <React.Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, index) =>
          (<li key={index + tab} className={`movie-nav__item ${index === activeItem && `movie-nav__item--active`}`}>
            <a href="#" className="movie-nav__link" onClick={(e) => {
              e.preventDefault();
              handleAction(index);
            }}>
              {tab}
            </a>
          </li>))}
      </ul>
    </nav>

    {renderTab(activeItem)}
  </React.Fragment>;

};

Tabs.propTypes = {
  activeItem: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired
};

export default Tabs;

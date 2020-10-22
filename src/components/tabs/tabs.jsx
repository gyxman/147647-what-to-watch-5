import React, {PureComponent} from "react";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.tabs = [`Overview`, `Details`, `Reviews`];

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(index) {
    this.setState(() => ({activeTab: index}));
  }

  renderTab(index) {
    const tabs = [
      {getTab: () => <TabOverview />},
      {getTab: () => <TabDetails />},
      {getTab: () => <TabReviews />}
    ];

    return tabs[index].getTab();
  }

  render() {
    const {activeTab} = this.state;

    return <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {this.tabs.map((tab, index) =>
            (<li key={index + tab} className={`movie-nav__item ${index === activeTab && `movie-nav__item--active`}`}>
              <a href="#" className="movie-nav__link" onClick={(e) => {
                e.preventDefault(); this.handleTabChange(index);
              }}>
                {tab}
              </a>
            </li>))}
        </ul>
      </nav>

      {this.renderTab(activeTab)}
    </React.Fragment>;
  }

}

export default Tabs;

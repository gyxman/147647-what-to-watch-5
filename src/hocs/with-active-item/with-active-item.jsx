import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this.handleHover = this.handleHover.bind(this);
    }

    handleHover(id) {
      this.setState(() => ({activeItem: id}));
    }

    render() {
      return <Component
        {...this.props}
        handleHover={this.handleHover}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;

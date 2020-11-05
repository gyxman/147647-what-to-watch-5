import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this.handleAction = this.handleAction.bind(this);
    }

    handleAction(id) {
      this.setState(() => ({activeItem: id}));
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        handleAction={this.handleAction}
        activeItem={activeItem}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;

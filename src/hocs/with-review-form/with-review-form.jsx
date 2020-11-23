import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        comment: null,
        isLocked: true,
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleLocked = this.handleLocked.bind(this);
    }

    handleFieldChange(event) {
      const {name, value} = event.target;

      if (name === `comment` && value.length > 50 && value.length < 400) {
        this.setState({
          isLocked: false,
        });
      } else {
        this.setState({
          isLocked: true,
        });
      }

      this.setState(() => ({[name]: value}));
    }

    handleSubmit(event) {
      event.preventDefault();
      const {rating, comment} = this.state;
      const {onSubmit} = this.props;

      onSubmit({rating, comment});
    }

    handleLocked(status) {
      this.setState({
        isLocked: status,
      });
    }

    render() {
      const {isLocked, rating} = this.state;

      return <Component
        {...this.props}
        handleFieldChange={this.handleFieldChange}
        handleSubmit={this.handleSubmit}
        isLocked={isLocked}
        rating={rating}
      />;
    }
  }

  WithReviewForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return WithReviewForm;
};

export default withReviewForm;

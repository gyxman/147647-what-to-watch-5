import PropTypes from "prop-types";

export default {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rating: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired
};

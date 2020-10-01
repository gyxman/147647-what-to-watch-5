import React from 'react';
import PropTypes from 'prop-types';
import Main from "../main/main";

const App = (props) => {
  const {movie} = props;

  return <Main movie={movie}></Main>;
};

App.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number
  }),
};

export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";

const MOVIE = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

ReactDOM.render(<App movie={MOVIE} />, document.querySelector(`#root`));


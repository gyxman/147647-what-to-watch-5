import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import MoviePropType from '../../proptypes/movie-proptypes';

const App = (props) => {
  const {movies} = props;

  return <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <Main movies={movies} />
      </Route>
      <Route path='/login' exact>
        <SignIn />
      </Route>
      <Route path='/mylist' exact>
        <MyList />
      </Route>
      <Route path='/films/:id' exact>
        <Movie />
      </Route>
      <Route path='/films/:id/review' exact>
        <AddReview />
      </Route>
      <Route path='/player/:id' exact>
        <Player />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(MoviePropType)
  ).isRequired
};

export default App;


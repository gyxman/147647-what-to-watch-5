import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {movie} = props;

  return <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <Main movie={movie} />
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
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number
  }),
};

export default App;


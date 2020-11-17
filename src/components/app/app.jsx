import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import browserHistory from "../../browser-history";

const MovieWrapped = withVideoPlayer(Movie);

const App = () => {
  return <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/login' exact>
        <SignIn />
      </Route>
      <Route path='/mylist' exact>
        <MyList />
      </Route>
      <Route path='/films/:id' exact>
        <MovieWrapped />
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

App.propTypes = {};

export default App;


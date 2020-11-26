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
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../const";

const MainWrapped = withVideoPlayer(Main);
const MovieWrapped = withVideoPlayer(Movie);

const App = () => {
  return <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path={AppRoute.ROOT} exact>
        <MainWrapped />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <SignIn />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.MY_LIST}
        render={() => {
          return (
            <MyList />
          );
        }}
      />
      <Route path={AppRoute.MOVIE} exact render={() => {
        return (
          <MovieWrapped key={window.location.pathname} />
        );
      }}>
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.REVIEW_FULL}
        render={() => {
          return (
            <AddReview />
          );
        }}
      />
      <Route path={AppRoute.PLAYER} exact>
        <Player />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {};

export default App;


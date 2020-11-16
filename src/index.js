import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {fetchMoviesList} from "./store/api-actions";

const api = createAPI(
    () => {}
);


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchMoviesList()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });


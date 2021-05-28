import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainPage from './components/MainPage/MainPage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import BalancePage from './components/BalancePage/BalancePage.jsx';

import store from './redux/store.js';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/balance">
          <BalancePage />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/error">
        <ErrorPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);

export default App;

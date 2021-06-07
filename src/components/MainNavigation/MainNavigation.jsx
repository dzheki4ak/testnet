import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BalancePage from '../BalancePage/BalancePage.jsx'
import MainPage from '../MainPage/MainPage.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';


import * as Routes from '../../routes';



const MainNavigation = () => {
  const { HOME, ERROR, NOT_FOUND, BALANCE } = Routes;
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={MainPage} />
        <Route path={BALANCE} component={BalancePage} />
        <Route path={ERROR} component={ErrorPage} />
        <Route path={NOT_FOUND} component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default MainNavigation;

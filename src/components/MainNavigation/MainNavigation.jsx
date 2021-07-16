import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BalancePage from '../BalancePage/BalancePage.jsx'
import MainPage from '../MainPage/MainPage.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import TransactionsList from '../TransactionsList/TransactionsList.jsx';
import TransactionDetails from '../TransactionDetails/TransactionDetails.jsx'
import { HOME, ERROR, NOT_FOUND, BALANCE, TRANSACTIONS, DETAILS } from '../../routes';

const MainNavigation = () => (
    <Router>
      <Switch>
        <Route exact path={HOME} component={MainPage} />
        <Route path={BALANCE} component={BalancePage} />
        <Route path={ERROR} component={ErrorPage} />
        <Route path={TRANSACTIONS} component={TransactionsList} />
        <Route path={DETAILS} component={TransactionDetails} />
        <Route path={NOT_FOUND} component={NotFoundPage} />
      </Switch>
    </Router>
  );

export default MainNavigation;

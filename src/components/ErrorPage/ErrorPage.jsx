import React from 'react';

import { HOME } from '../../routes';

import NavLink from '../NavLinks/NavLink.jsx';

import './ErrorPage.scss';

const ErrorPage = () => (
  <div className="error__page">
    <h1 className="error__page_header">Oopsss...🧐</h1>
    <h3 className="error__page_description">
      Service is temporarily unavailable
    </h3>
    <p className="error__page_advise">Please try again later</p>
    <NavLink text={`Home`} route={HOME} />
  </div>
);

export default ErrorPage;

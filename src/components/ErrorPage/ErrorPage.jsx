import React from 'react';

import './ErrorPage.scss'

const ErrorPage = () => (
  <div className="error__page">
    <h1 className="error__page_header">Oopsss...🧐</h1>
    <h3 className="error__page_description">Service is temporarily unavailable</h3>
    <p className="error__page_advise">Please try again later</p>
  </div>
);

export default ErrorPage;

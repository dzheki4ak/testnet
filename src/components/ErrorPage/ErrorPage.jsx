import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.scss';

const ErrorPage = () => (
  <div className="error__page">
    <h1 className="error__page_header">Oopsss...🧐</h1>
    <h3 className="error__page_description">
      Service is temporarily unavailable
    </h3>
    <p className="error__page_advise">Please try again later</p>
    <button className="error__page_btn btn"><Link to="/" className="link">Home</Link></button>
  </div>
);

export default ErrorPage;

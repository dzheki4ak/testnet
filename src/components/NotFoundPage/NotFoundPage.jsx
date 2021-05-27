import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="error__page">
    <h1 className="error__page_header">404 🔍</h1>
    <h3 className="error__page_description">
      Page is not found
    </h3>
    <p className="error__page_advise">Please verify the address you've enterred and try again</p>
    <button className="error__page_btn btn">
      <Link to="/" className="link">
        Home
      </Link>
    </button>
  </div>
);

export default NotFoundPage;

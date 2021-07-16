import React from 'react';

import { HOME } from '../../routes';

import NavLink from '../NavLinks/NavLink.jsx';

const NotFoundPage = () => (
  <div className="error__page">
    <h1 className="error__page_header">404 🔍</h1>
    <h3 className="error__page_description">Page is not found</h3>
    <p className="error__page_advise">
      Please verify the address you've enterred and try again
    </p>
    <NavLink text="Home" route={HOME} />
  </div>
);

export default NotFoundPage;

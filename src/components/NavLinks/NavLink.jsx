import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.scss';

const NavLink = ({ text, route }) => (
  <button className="main__page_buttons-btn btn">
    <Link to={route} className="link">
      {text}
    </Link>
  </button>
);

export default NavLink;

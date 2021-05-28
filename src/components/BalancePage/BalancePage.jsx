import React from 'react';
import { Link } from 'react-router-dom';

const BalancePage = () => (
  <div className="balance__page">
    <h1 className="balance__page_balance">Your current balance is: <span className="main__page_header-span">0,00 💲</span></h1>
    <h3 className="balance__page_spent">Total spent: <span className="main__page_header-span">1034074028,00 💲</span></h3>
    <h3 className="balance__page_received">Total received: <span className="main__page_header-span">1034074028,00 💲</span></h3>
    <button className="balance__page_btn btn">
      <Link to="/" className="link">
        Home
      </Link>
    </button>
  </div>
);

export default BalancePage;

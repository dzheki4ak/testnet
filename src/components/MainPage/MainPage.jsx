import React from 'react';

import './MainPage.scss';

const MainPage = () => {
  const user = '2MvvYEgXvTzCLDMPNPBB68boQTrkbpiBZh6';

  return (
    <div className="main__page">
      <h2 className="main__page_header">
        Hello,<span className="main__page_header-span">{` ${user}!`}</span>
      </h2>
      <p className="main__page_greeting">What would you like to do?</p>
      <div className="main__page_buttons">
        <button className="main__page_buttons-btn">Check transactions</button>
        <button className="main__page_buttons-btn">Check ballance</button>
        <button className="main__page_buttons-btn">Send money</button>
      </div>
    </div>
  );
};

export default MainPage;

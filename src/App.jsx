import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store.js'; 

import MainNavigation from './components/MainNavigation/MainNavigation.jsx';



const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
);

export default App;

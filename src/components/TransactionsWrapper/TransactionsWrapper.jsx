import React from 'react'

import Spinner from '../Spinner/Spinner.jsx';

const TransactionsWrapper = ({ children, list }) => {
  const isListEmpty = list.length === 0
  
  if (isListEmpty) {
    return <Spinner />;
  }
  
  return children;
  }

export default TransactionsWrapper;
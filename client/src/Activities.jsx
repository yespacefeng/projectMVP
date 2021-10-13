import React from 'react';
import { Link } from 'react-router-dom';
import TransactionEntry from './TransactionEntry.jsx';

const Activities = ({ userInfomation }) => (
  <div id='activities-page'>
    <div className='button-container'>
      <button className='select'>
        <h3>Savings</h3>
        <h4>${userInfomation.savings.balance}</h4>
      </button>
      <button className='select'>
        <h3>Checking</h3>
        <h4>${userInfomation.checking.balance}</h4>
      </button>
    </div>
    {userInfomation.transactions.map(transaction =>
      <TransactionEntry
        key={transaction.id}
        transaction={transaction}
      />
    )}
  </div>
)

export default Activities;
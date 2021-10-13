import React from 'react';

let TransactionEntry = ({ transaction }) => (
  <div className='transaction-entry'>
    <h4 className='description'>{transaction.description}</h4>
    <h4 className='account'>{transaction.account_type}</h4>
    {transaction.withdraw ? <h4 className='amount'>- ${(Math.round(transaction.amount * 100) / 100).toFixed(2)}</h4> : <h4 className='amount'>+ ${(Math.round(transaction.amount * 100) / 100).toFixed(2)}</h4>}
  </div>
)

export default TransactionEntry;
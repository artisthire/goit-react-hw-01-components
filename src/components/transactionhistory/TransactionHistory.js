import React from 'react';
import PropTypes from 'prop-types';
import s from './transactionhistory.module.scss';

const TransactionHistory = ({ items }) => (
  <table className={s.transaction_history}>
    <thead>
      <tr>
        <th className={s.type}>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={s.type}>{type}</td>
          <td>{amount}</td>
          <td className={s.currency}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.prototype = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;

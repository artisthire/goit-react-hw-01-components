import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;

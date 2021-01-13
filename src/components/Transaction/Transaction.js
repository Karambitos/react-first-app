import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const Transaction = ({ transactions }) => {
  return transactions.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id} className={styles.tr}>
        <td className={styles.td}>{type}</td>
        <td className={styles.td}>{amount}</td>
        <td className={styles.td}>{currency}</td>
      </tr>
    );
  });
};

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.string,
      type: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Transaction;

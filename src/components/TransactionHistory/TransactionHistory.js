import React from 'react';
import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <section>
      <table className={styles.transactionHistory}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {/* {items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>{item.currency}</td>
                            </tr>
                        )
                    })} */}
          <Transaction items={items} />
        </tbody>
      </table>
    </section>
  );
};

// TransactionHistory.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         currency: PropTypes.string,
//         amount: PropTypes.string,
//         type: PropTypes.string,
//         id: PropTypes.string,
//     })).isRequired
// }

export default TransactionHistory;

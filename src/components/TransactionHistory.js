import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';


const TransactionHistory = ({items}) => {
    return (
        <section className="transactios">
            <table className="transaction-history">
                  <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
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
                    <Transaction
                        items={ items }/>
                </tbody>
                
            </table>
        </section>
    )
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
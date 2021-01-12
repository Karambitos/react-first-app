import React from 'react';
import PropTypes from 'prop-types';


const Transaction = ({items}) => {
    return (
        items.map(({id, type, amount, currency}) => {
            return (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            )
        })
    )
};

Transaction.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
    })).isRequired
}

export default Transaction;
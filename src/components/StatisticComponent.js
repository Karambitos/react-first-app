import React from 'react';
import PropTypes from 'prop-types';

const StatisticComponent = ({ StatisticsData }) => {
    return (
        StatisticsData.map(({id, label, percentage}) => {
            return (
                <li key={id}>
                    {label && <span className="label">{label}</span>}
                    <span className="percentage">{percentage}</span>
                </li>
            )
        })
    )
}

StatisticComponent.propTypes = {
    StatisticsData: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    })).isRequired
}
// StatisticComponent.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.number.isRequired,
// };

export default StatisticComponent;

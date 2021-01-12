import React from 'react';
import PropTypes from 'prop-types';
// import StatisticsData from '../statistical-data.json';
import StatisticComponent from '../components/StatisticComponent'

const Statistics = ({ StatisticsData }) => {    
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {/* {StatisticsData.map((Statistic) => {
                    return (
                        <li key={Statistic.id}>
                            <StatisticComponent
                                title={Statistic.label}
                                stats={Statistic.percentage} />
                        </li>
                    )
                })} */}
                <StatisticComponent
                    StatisticsData={ StatisticsData }/>
            </ul>
        </section>
    )
};

// Statistics.propTypes = {
//     StatisticsData: PropTypes.arrayOf(PropTypes.shape({
//         label: PropTypes.string,
//         percentage: PropTypes.number,
//     })).isRequired
// }

export default Statistics;
import React from 'react';
import PropTypes from 'prop-types';
import StatisticComponent from '../StatisticComponent/StatisticComponent';
import styles from './Statistic.module.css';

const Statistics = ({ StatisticsData }) => {
  return (
    <section className={styles.statisticBox}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {/* {StatisticsData.map((Statistic) => {
                    return (
                        <li key={Statistic.id}>
                            <StatisticComponent
                                title={Statistic.label}
                                stats={Statistic.percentage} />
                        </li>
                    )
                })} */}
        <StatisticComponent StatisticsData={StatisticsData} />
      </ul>
    </section>
  );
};

// Statistics.propTypes = {
//     StatisticsData: PropTypes.arrayOf(PropTypes.shape({
//         label: PropTypes.string,
//         percentage: PropTypes.number,
//     })).isRequired
// }

export default Statistics;

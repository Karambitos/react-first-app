import React from 'react';
import StatisticComponent from '../StatisticComponent/StatisticComponent';
import styles from './Statistic.module.css';

const Statistics = ({ StatisticsData }) => {
  return (
    <section className={styles.statisticBox}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        <StatisticComponent StatisticsData={StatisticsData} />
      </ul>
    </section>
  );
};

export default Statistics;

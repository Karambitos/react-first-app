import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticComponent.module.css';

let colorFu = () => {
  let color = Math.floor(Math.random() * 16777216).toString(16);
  return '#000000'.slice(0, -color.length) + color;
};

const StatisticComponent = ({ StatisticsData }) => {
  return StatisticsData.map(({ id, label, percentage }) => {
    return (
      <li
        key={id}
        className={styles.item}
        style={{ backgroundColor: colorFu() }}
      >
        {label && <span className={styles.label}>{label}</span>}
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    );
  });
};

StatisticComponent.propTypes = {
  StatisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default StatisticComponent;

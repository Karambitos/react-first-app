import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttonBox}>
      {Object.keys(options).map(el => (
        <button key={el} onClick={onLeaveFeedback}>
          {el}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;

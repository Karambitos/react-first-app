import React from 'react';
import styles from './Section.module.css';

export default function Section({ classN, text, children }) {
  return (
    <section className={[classN, styles.section].join(' ')}>
      {text && <h2 className={styles.title}>{text}</h2>}
      {children}
    </section>
  );
}

import React from 'react';
import styles from './stopwatch.module.css';
//import close from '../../assets/icons/close.svg';

const Stopwatch = () => {
  return (
    <section className={styles.stopwatch}>
      <div className={styles.header}>
        <h1 className={styles.capture}>Time Tracking</h1>
      </div>

      <div className={styles.container}>
        <p></p>
      </div>
    </section>
  );
};

export default Stopwatch;

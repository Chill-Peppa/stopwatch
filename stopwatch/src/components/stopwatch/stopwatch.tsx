import { useState } from 'react';
import styles from './stopwatch.module.css';
import start from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';
import refresh from '../../assets/icons/refresh.svg';

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  console.log(start);
  return (
    <section className={styles.stopwatch}>
      <div className={styles.header}>
        <h1 className={styles.capture}>Time Tracking</h1>
      </div>

      <div className={styles.container}>
        <p className={styles.time}>{time}</p>
        <div className={styles.buttonsContainer}>
          <img
            className={styles.start}
            src={start as unknown as string}
            alt="start"
          />
          <img
            className={styles.stop}
            src={pause as unknown as string}
            alt="stop"
          />
          <img
            className={styles.refresh}
            src={refresh as unknown as string}
            alt="refresh"
          />
        </div>
      </div>
    </section>
  );
};

export default Stopwatch;

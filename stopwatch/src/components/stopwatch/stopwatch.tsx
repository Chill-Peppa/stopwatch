import { useEffect, useState, useRef } from 'react';
import styles from './stopwatch.module.css';
import start from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';
import refresh from '../../assets/icons/refresh.svg';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMins((prevMins) => {
              if (prevMins === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMins + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, mins, seconds, hours]);

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleStopClick = () => {
    setIsRunning(false);
  };

  const onRefreshClick = () => {
    setHours(0);
    setMins(0);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <section className={styles.stopwatch}>
      <div className={styles.header}>
        <h1 className={styles.capture}>Time Tracking</h1>
      </div>

      <div className={styles.container}>
        <p className={styles.time}>{`${hours}ч : ${mins}м : ${seconds}с`}</p>
        <div className={styles.buttonsContainer}>
          <img
            className={styles.refresh}
            src={refresh as unknown as string}
            alt="refresh"
            onClick={onRefreshClick}
          />
          <img
            className={styles.start}
            src={start as unknown as string}
            alt="start"
            onClick={handleStartClick}
          />
          <img
            className={styles.stop}
            src={pause as unknown as string}
            alt="stop"
            onClick={handleStopClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Stopwatch;

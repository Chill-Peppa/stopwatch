import React, { useEffect, useState } from 'react';
import styles from './stopwatch.module.css';
import start from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';
import refresh from '../../assets/icons/refresh.svg';

interface StopwatchState {
  seconds: number;
  mins: number;
  hours: number;
  isRunning: boolean;
}

//Если бы были пропсы, мы бы передали первым аргументом
//В дженерик типы пропсов
class Stopwatch extends React.Component<{}, StopwatchState> {
  interval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);

    this.state = {
      seconds: 0,
      mins: 0,
      hours: 0,
      isRunning: false,
    };
  }

  handleRefresh = () => {
    this.setState({
      seconds: 0,
      mins: 0,
      hours: 0,
      isRunning: false,
    });
  };

  handleStartRunning = () => {
    this.setState({
      isRunning: true,
    });

    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds === 59 ? 0 : prevState.seconds + 1,
        mins:
          prevState.seconds === 59 && prevState.mins === 59
            ? 0
            : prevState.seconds === 59
            ? prevState.mins + 1
            : prevState.mins,
        hours:
          prevState.seconds === 59 && prevState.mins === 59
            ? prevState.hours + 1
            : prevState.hours,
      }));
    }, 1000);
  };

  handleStopRunning = () => {
    this.setState({
      isRunning: false,
    });

    if (this.interval) {
      clearInterval(this.interval);
    }
  };
  render() {
    return (
      <section className={styles.stopwatch}>
        <div className={styles.header}>
          <h1 className={styles.capture}>Time Tracking</h1>
        </div>

        <div className={styles.container}>
          <p
            className={
              styles.time
            }>{`${this.state.hours}ч : ${this.state.mins}м : ${this.state.seconds}с`}</p>
          <div className={styles.buttonsContainer}>
            <img
              className={styles.refresh}
              src={refresh as unknown as string}
              alt="refresh"
              onClick={this.handleRefresh}
            />
            <img
              className={styles.start}
              src={start as unknown as string}
              alt="start"
              onClick={this.handleStartRunning}
            />
            <img
              className={styles.stop}
              src={pause as unknown as string}
              alt="stop"
              onClick={this.handleStopRunning}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Stopwatch;

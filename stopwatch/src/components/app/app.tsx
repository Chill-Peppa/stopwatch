import React from 'react';
import Stopwatch from '../stopwatch/stopwatch';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.page}>
      <Stopwatch />
    </div>
  );
};

export default App;

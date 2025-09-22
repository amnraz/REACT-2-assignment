import React from 'react';
import useTimer from '../hooks/useTimer';
import '../styles/TimerComponent.css';

function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="timer-container">
      <h2>⏱️ Timer: {timer} seconds</h2>
      <p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
      <div className="button-group">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default TimerComponent;

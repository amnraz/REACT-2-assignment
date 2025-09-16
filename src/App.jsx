// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px',color: 'grey'}}>
      <h2>Redux Counter App</h2>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>{' '}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <br />
      <h4>State (stringified):</h4>
      <pre>{JSON.stringify({ count }, null, 2)}</pre>
    </div>
  );
}

export default App;

// Counter.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync, decrementAsync } from './actions';

const Counter = ({ count, increment, decrement, incrementAsync, decrementAsync }) => (
  <div className='flex flex-col items-center'>
    <h2>Counter: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={incrementAsync}>Increment Async</button>
    <button onClick={decrementAsync}>Decrement Async</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

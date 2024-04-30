// actions.js

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementAsync = () => ({ type: INCREMENT_ASYNC });
export const decrementAsync = () => ({ type: DECREMENT_ASYNC });

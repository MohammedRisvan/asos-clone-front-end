// sagas.js

import { put, takeEvery } from 'redux-saga/effects';
import { INCREMENT_ASYNC, DECREMENT_ASYNC, increment, decrement } from './actions';

function* incrementAsync() {
  yield new Promise(resolve => setTimeout(resolve, 1000));
  yield put(increment());
}

function* decrementAsync() {
  yield new Promise(resolve => setTimeout(resolve, 1000));
  yield put(decrement());
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

function* watchDecrementAsync() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}

export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    watchDecrementAsync()
  ];
}

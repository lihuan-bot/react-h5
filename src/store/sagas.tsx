/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:19:09
 * @LastEditTime: 2021-10-04 20:45:59
 * @Email: 17719495105@163.com
 */
import { put, call, takeEvery, delay } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

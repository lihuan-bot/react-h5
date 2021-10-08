/*
 * @Author: lihuan
 * @Date: 2021-10-05 09:23:52
 * @LastEditTime: 2021-10-08 08:54:14
 * @Email: 17719495105@163.com
 */
import { delay, put, takeEvery } from 'redux-saga/effects';

import * as actionTypes from './constants';
import { changeNumAction } from './actionCreaters';

export interface IIncrement {
  type: typeof actionTypes.CHANGE_INCREAMENT;
  payload: {
    num: number;
  };
}
export type CounterActionTypes = IIncrement;

function* increment(actions: IIncrement) {
  yield delay(1000);
  yield put(changeNumAction(actions.payload));
}

function* watchIncrement() {
  yield takeEvery(actionTypes.FETCH_INCREAMENT, increment);
}

const sagaArr = [watchIncrement()];

export default sagaArr;

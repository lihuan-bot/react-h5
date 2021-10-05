/*
 * @Author: lihuan
 * @Date: 2021-10-05 09:23:52
 * @LastEditTime: 2021-10-05 16:29:35
 * @Email: 17719495105@163.com
 */
import { delay, put, takeEvery } from 'redux-saga/effects';

import * as actionTypes from './constants';

export interface IIncrement {
  type: typeof actionTypes.R_INCREAMENT;
  payload: {
    num: number;
  };
}
export type CounterActionTypes = IIncrement;

function* increment(actions: IIncrement) {
  yield delay(1000);
  yield put<IIncrement>({ type: actionTypes.R_INCREAMENT, payload: actions.payload });
}

function* watchIncrement() {
  yield takeEvery(actionTypes.W_INCREAMENT, increment);
}

const sagaArr = [watchIncrement()];

export default sagaArr;

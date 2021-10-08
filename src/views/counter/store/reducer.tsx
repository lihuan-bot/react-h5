/*
 * @Author: lihuan
 * @Date: 2021-10-05 09:03:54
 * @LastEditTime: 2021-10-08 08:54:34
 * @Email: 17719495105@163.com
 */

import { produce, Draft } from 'immer';
import { CounterActionTypes } from './saga';
import * as actionTypes from './constants';

interface ICounter {
  num: number;
}

const defaultState: ICounter = {
  num: 1,
};

const counterReducer = produce((draft: Draft<ICounter>, action: CounterActionTypes) => {
  switch (action.type) {
    case actionTypes.CHANGE_INCREAMENT:
      draft.num = draft.num + action.payload.num;

      break;

    default:
      break;
  }
}, defaultState);

export default counterReducer;

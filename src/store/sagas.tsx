/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:19:09
 * @LastEditTime: 2021-10-05 15:43:53
 * @Email: 17719495105@163.com
 */
import { all } from 'redux-saga/effects';

import { counterSaga } from '@/views/counter/store';

export default function* rootSaga() {
  yield all([...counterSaga]);
}

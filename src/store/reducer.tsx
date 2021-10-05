/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:03:24
 * @LastEditTime: 2021-10-05 15:43:23
 * @Email: 17719495105@163.com
 */

import { combineReducers } from 'redux';

import { counterReducer } from '@/views/counter/store';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type AppStore = ReturnType<typeof rootReducer>;

export default rootReducer;

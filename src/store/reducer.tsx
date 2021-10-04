/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:03:24
 * @LastEditTime: 2021-10-04 20:42:46
 * @Email: 17719495105@163.com
 */

import { combineReducers } from 'redux';

function fn(state = 0, action: any) {
  console.log(action);
  console.log(2);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  fn,
});

export type AppStore = ReturnType<typeof rootReducer>;

export default rootReducer;

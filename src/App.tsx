/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-10-04 20:50:19
 * @Email: 17719495105@163.com
 */

import { memo, FC } from 'react';

import { Provider } from 'react-redux';

import store from './store/index';

import Test from './Test';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Test></Test>
    </Provider>
  );
};

export default memo(App);

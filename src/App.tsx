/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-10-05 16:33:37
 * @Email: 17719495105@163.com
 */

import { memo, FC } from 'react';

import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import store from './store/index';

import Counter from './views/counter/Counter';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Counter></Counter>
      </BrowserRouter>
    </Provider>
  );
};

export default memo(App);

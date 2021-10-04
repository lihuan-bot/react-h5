/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:02:57
 * @LastEditTime: 2021-10-04 18:56:54
 * @Email: 17719495105@163.com
 */
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';

import rootSaga from './sagas';
//创建saga中间件
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
//创建 store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;

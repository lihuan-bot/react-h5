/*
 * @Author: lihuan
 * @Date: 2021-10-05 22:36:28
 * @LastEditTime: 2021-10-08 08:54:07
 * @Email: 17719495105@163.com
 */

import * as actionTypes from './constants';

export const changeNumAction = (payload: { num: number }) => ({ type: actionTypes.CHANGE_INCREAMENT, payload });

export const getNumAction = (num: number) => ({ type: actionTypes.FETCH_INCREAMENT, payload: { num } });

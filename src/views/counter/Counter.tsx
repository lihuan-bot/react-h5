/*
 * @Author: lihuan
 * @Date: 2021-10-04 19:30:03
 * @LastEditTime: 2021-10-05 16:24:16
 * @Email: 17719495105@163.com
 */

import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/store/reducer';
import * as actionTypes from './store/constants';
const Counter = () => {
  const { num } = useSelector((state: AppStore) => ({
    num: state.counter.num,
  }));

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: actionTypes.W_INCREAMENT });
  // }, [dispatch]);
  return (
    <>
      <span>{num}</span>
      <div
        onClick={() => {
          dispatch({ type: actionTypes.W_INCREAMENT, payload: { num: 1000 } });
        }}>
        ConterAsync +
      </div>
    </>
  );
};

export default memo(Counter);

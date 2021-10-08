/*
 * @Author: lihuan
 * @Date: 2021-10-04 19:30:03
 * @LastEditTime: 2021-10-07 11:00:44
 * @Email: 17719495105@163.com
 */

import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/store/reducer';
import { getNumAction } from '@/views/counter/store/actionCreaters';
const Counter = () => {
  const { num } = useSelector((state: AppStore) => ({
    num: state.counter.num,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNumAction(10));
  }, [dispatch]);
  return (
    <>
      <span>{num}</span>
      <div
        onClick={() => {
          dispatch(getNumAction(100));
        }}>
        ConterAsync +
      </div>
    </>
  );
};

export default memo(Counter);

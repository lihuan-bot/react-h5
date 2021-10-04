/*
 * @Author: lihuan
 * @Date: 2021-10-04 19:30:03
 * @LastEditTime: 2021-10-04 20:45:10
 * @Email: 17719495105@163.com
 */

import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Test = () => {
  const c = useSelector((state: any) => ({
    c: state['fn'],
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INCREMENT_ASYNC' });
  }, [dispatch]);
  return (
    <div
      onClick={() => {
        dispatch({ type: 'INCREMENT_ASYNC' });
      }}>
      222
    </div>
  );
};

export default memo(Test);

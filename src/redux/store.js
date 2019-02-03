/*
redux最核心的管理对象
  state
  reducer
 */
import {createStore} from 'redux';
import count from './reducer';
// 创建store对象, 内部会第一次调用reducer函数得到初始状态值
export default createStore(count);
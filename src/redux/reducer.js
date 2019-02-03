/*
根据现有的state和指定的action来返回一个新的state
 */
import {INCREMENT, DECREMENT} from './action-types'
/*
管理count状态数据的reducer函数
 */
 function count(state = 0, action) {
    // console.log('count()', state, action);
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;  // 返回原本的状态值
    }
}
export default count;
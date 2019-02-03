/*
包含n个 action creator
 */
import {INCREMENT, DECREMENT} from './action-types'

/*
增加的action creator,返回action对象
 */
// export const increment = (number) => ({type: INCREMENT, number});
export const increment = (number) => {
    return{
        type:INCREMENT,
        data:number
    }
};
/*
减少的action creator,返回action对象
 */
// export const decrement = (number) => ({type: DECREMENT, number});
export const decrement = (number) => {
    return{
        type:DECREMENT,
        data:number
    }
};
import {TEST1,TEST2} from '../action_types'

//创建增加一个人的action动作对象
export const createDemo1Action = (value) =>({type:TEST1,data:value})

export const createDemo2Action = (value) =>({type:TEST2,data:value})
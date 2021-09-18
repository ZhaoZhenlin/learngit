import {TEST1,TEST2} from '../action_types'

const initState = 'hello'
export default function countReducer(preState=initState,action){ //preState=initState 形参的默认值写法
    //从action对象中获取type,data
    const {type,data} = action
    //根据type决定如何加工数据
    let newState
    switch (type) {
        case TEST1:
            newState = preState + data
            return newState
        case TEST2:
            newState = preState + data +'!'
            return newState
        default:
            return preState
    }
}
/*
    该文件用于汇总所有的reducer为一个总的reducer
 */
//引入combineReducers用于汇总多个reducer
import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
// import countReducer from './count'
import testReducer from './test_reducer'



const allReducers = combineReducers({ 
    test:testReducer,
})

export default allReducers
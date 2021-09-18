//redux里最核心的管理者
/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用来创建redux中最为核心的store方法
import {createStore,applyMiddleware} from 'redux'
//引入汇总之后的reducer
import allReducers from './reducers/index'
//引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
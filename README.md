1. 问题1，背景不铺满  p83 14:00


store -> 

yarn add redux react-redux react-thunk redux-devtools-extension
yarn add react-redux react-thunk redux-devtools-extension

UI组件 -》 
准备一套UI组件有关的redux （ 常量 -》action -》reducer -》再去UI组件包装action的参数 -》store里进行组件combine -》去各个组件里改从redux里获取状态的语句） 
-》redux准备好后，准备容器组件 -》然后把东西通过props传给UI组件
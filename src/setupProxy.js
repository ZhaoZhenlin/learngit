//  //只要改了这个文件，就要重启脚手架
//  const proxy = require('http-proxy-middleware')

//  module.exports = function(app){
//      app.use(
//          proxy('/manage',{  
//              target:'http://www.web-jshtml.cn/api/react', 
//              changeOrigin:true, 
//              pathRewrite:{'^/manage':''} 
//          })
//      )
    //  app.use(
    //     proxy('/manage/api',{  
    //         target:'http://admintest.happymmall.com:7000', 
    //         changeOrigin:true, 
    //         pathRewrite:{'^/manage/api':''} 
    //     })
    // )
     
//  }
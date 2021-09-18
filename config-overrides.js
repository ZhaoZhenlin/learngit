// import { addWebpackAlias, fixBabelImports, override, addDecoratorsLegacy } from 'customize-cra'
//   import { resolve } from 'path'
   
//   export default override(
//     // @ 修饰器
//     addDecoratorsLegacy(),
//     fixBabelImports('import', {
//       libraryName: 'antd',
//       libraryDirectory: 'es',
//       // 支持 less sass stylus
//       style: true,
//     }),
//     // // 支持 antd 主题定制
//     // addSassLoader({
//     //   javascriptEnabled: true,
//     // }),
//     // 别名
//     addWebpackAlias({
//       '@': resolve(__dirname, 'src'),　　
//       '@@': resolve(__dirname, 'src/components'),
//     })
//   )
// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);
const { override, fixBabelImports } = require('customize-cra');


 module.exports = override(
   fixBabelImports('import', {
    libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
 );
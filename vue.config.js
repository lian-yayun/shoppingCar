module.exports = {
pages:{
  index:{
    entry:'src/main.js',
  },
},
lintOnSave:false,
// devServer: {
//   proxy: 'http://localhost:5000'
// }
devServer: {
  proxy: {
    '/atguigu': {
      target: 'http://localhost:5000',
pathRewrite:{'^/atguigu':''},
      ws: true,
      changeOrigin: true
    },
    '/demo': {
      target: 'http://localhost:5001',
pathRewrite:{'^/demo':''},
      ws: true,
      changeOrigin: true
    }
  }
}
}
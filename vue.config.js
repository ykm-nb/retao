const target = 'http://47.111.101.3:8081';

module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: 8032,
    https: false,
    hotOnly: false,
    proxy: {
      '/retao-web': {
          target,
          changeOrigin: true,
          ws: true,
          pathRewrite: { //路径重写 
              '^/retao-web': '/retao-web'
          }
      }
    }
  }
}

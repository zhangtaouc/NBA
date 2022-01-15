module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://124.71.210.246:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}

module.exports = {
  lintOnSave: false,
  publicPath: '',
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: false,
      },
    },
  },
}

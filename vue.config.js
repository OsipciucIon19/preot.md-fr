module.exports = {
  devServer: {
    proxy: {
      '^/api/categories': {
        target: 'http://localhost:8003/categories',
        pathRewrite: {
          '^/api/categories': ''
        },
        ws: true,
        changeOrigin: true
      },
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
};
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    externals: {
      vue: 'Vue'
    }
  }
}

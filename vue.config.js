module.exports = {
  transpileDependencies: [
    'vuetify',"@koumoul/vjsf"
  ],
  configureWebpack: {
    externals: {
      vue: 'Vue'
    }
  }
}

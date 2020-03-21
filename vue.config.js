module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'manual',
      rtlSupport: false
    },
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  // devServer:{
  //   proxy: 'http://localhost:8080'
  // }
};

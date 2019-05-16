// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
        .pre()
          .exclude
            .add(/n-ui/)
              .end()
  }
}

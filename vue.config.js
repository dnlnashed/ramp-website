module.exports = {
    publicPath: './',
    transpileDependencies: [
      'ramp-pcar',
    ],
    chainWebpack: (config) => {
      config.module
        .rule('lint')
        .test(/lang\.csv$/)
        .use('eslint')
        .loader('dsv-loader');
    },
  };
  
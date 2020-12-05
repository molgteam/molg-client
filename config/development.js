module.exports = {
  backend: 'https://molg.kr',
  webpack: {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    definitions: {
      ORIGIN: 'window.location.origin',
    },
    watch: true,
    vars: {
      path: {
        app: '/app.js',
      },
    },
  },
};

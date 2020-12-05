module.exports = {
  backend: 'https://molg.kr',
  webpack: {
    mode: 'production',
    devtool: false,
    definitions: {
      ORIGIN: 'https://molg.kr',
    },
    watch: false,
    vars: {
      path: {
        app: '/app.js',
      },
    },
  },
};

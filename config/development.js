module.exports = {
  backend: 'https://molg.kr',
  webpack: {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    definitions: {
      NODE_ENV: JSON.stringify('development'),
      ORIGIN: 'window.location.origin',
      'IG.URL': JSON.stringify('https://www.instagram.com'),
    },
    watch: true,
    vars: {
      path: {
        app: '/app.js',
      },
    },
  },
};

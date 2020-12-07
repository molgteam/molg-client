module.exports = {
  backend: 'https://molg.kr',
  webpack: {
    mode: 'production',
    devtool: false,
    definitions: {
      NODE_ENV: JSON.stringify('production'),
      ORIGIN: 'https://molg.kr',
      'IG.URL': JSON.stringify('https://www.instagram.com'),
    },
    watch: false,
    vars: {
      path: {
        app: '/app.js',
      },
    },
  },
};

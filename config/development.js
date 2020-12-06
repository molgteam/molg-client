module.exports = {
  backend: 'https://molg.kr',
  webpack: {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    definitions: {
      'ORIGIN': 'window.location.origin',
      'IG.URL': JSON.stringify('https://www.instagram.com'),
      'IG.SEARCH': JSON.stringify('https://www.instagram.com/web/search/topsearch/'),
    },
    watch: true,
    vars: {
      path: {
        app: '/app.js',
      },
    },
  },
};

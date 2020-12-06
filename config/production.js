module.exports = {
  backend: 'https://molg.kr',
  webpack: {
    mode: 'production',
    devtool: false,
    definitions: {
      'ORIGIN': 'https://molg.kr',
      'IG.URL': JSON.stringify('https://www.instagram.com'),
      'IG.SEARCH': JSON.stringify('https://www.instagram.com/web/search/topsearch/'),
    },
    watch: false,
    vars: {
      path: {
        app: '/app.js',
      },
    },
  },
};

const path = require('path');
const config = require('config');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: config.get('webpack.mode'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'app'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: config.get('webpack.devtool'),
  watch: config.get('webpack.watch'),
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    open: true,
    proxy: {
      '/story': {
        target: config.get('backend'),
        changeOrigin: true,
      },
    },
  },
  plugins: [
    config.get('webpack.mode') === 'development' && new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'molg',
      inject: false,
      chunks: ['app'],
      filename: 'index.html',
      template: path.join(__dirname, 'html', 'index.html'),
      // favicon: path.join(__dirname, 'favicon.ico'),
      vars: config.get('webpack.vars'),
    }), // https://github.com/jantimon/html-webpack-plugin
    new DefinePlugin(config.get('webpack.definitions')),
  ].filter((p) => p),
};

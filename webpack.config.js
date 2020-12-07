const path = require('path');
const config = require('config');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: config.get('webpack.mode'),
  module: {
    rules: [
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'app'),
      '@modules': path.resolve(__dirname, 'modules'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: config.get('webpack.devtool'),
  watch: config.get('webpack.watch'),
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
    // host: '0.0.0.0',
    disableHostCheck: true,
    open: true,
    hot: true,
    overlay: true,
    stats: 'errors-only',
    historyApiFallback: true,
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
      filename: 'index.html',
      template: path.join(__dirname, 'html', 'index.html'),
      // favicon: path.join(__dirname, 'favicon.ico'),
      vars: config.get('webpack.vars'),
    }), // https://github.com/jantimon/html-webpack-plugin
    new DefinePlugin(config.get('webpack.definitions')),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ].filter((p) => p),
};

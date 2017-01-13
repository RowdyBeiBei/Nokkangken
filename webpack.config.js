const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports= {

  devtool: '#source-map',

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './client/main.js'
  ],
  output: {
    path: __dirname + '/client',
    publicPath: '/client/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new HTMLWebpackPlugin()

  ],
  target: 'web'
};

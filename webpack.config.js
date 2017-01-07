const webpack = require('webpack');

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
  ],
  target: 'web'
};

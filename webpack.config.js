const webpack = require('webpack');

module.exports= {
  devtool: '#source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './main.js'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/public/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
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

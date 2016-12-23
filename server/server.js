const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const app = express();

const compiler = webpack(webpackConfig);

// app.use(express.static('public'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.get('/', function(req, res) {
  res.send(200);
  console.log('hi from get /');
});



app.listen(3000, () => {console.log('Nokkangken listening on port 3000');});

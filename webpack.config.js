var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname );
var APP_DIR = path.resolve(__dirname );

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
  	loaders : [
  	   {
  			test : /\.jsx?/,
  			exclude: /node_modules/,
  			include : APP_DIR,
  			loader : 'babel',
  			query: {
  				presets: ['es2015', 'react']
  			}
		}
  	]
  }
};

module.exports = config;



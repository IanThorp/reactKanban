const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
	entry: {
		app: PATHS.app
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
 		path: PATHS.build,
    	filename: 'bundle.js'
  	},
  	module: {
  		loaders: [
  			{
  				test: /\.css$/,
  				loaders: ['style', 'css'],
  				include: PATHS.app
  			},

  			{
  				test: /\.jsx?$/,
  				loaders: ['babel?cacheDirectory'],
  				include: PATHS.app
  			}
  		]
  	}
};

if(TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new NpmInstallPlugin({
				save: true // --save
			})
		]
	});
}

if(TARGET === 'build'){
	module.exports = merge(common, {});
}



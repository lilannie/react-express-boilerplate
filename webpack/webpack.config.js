const path = require('path'),
	webpack = require('webpack'),
	//HTMLWebpackPlugin = require('html-webpack-plugin'), // Useful when bundles file names change dynamically
	paths = {
	    entry: path.resolve('client', 'index.js'),
	    build: path.resolve('public'),
	    output: 'bundle.js',
	};

module.exports = {
	devtool: 'eval-source-map', // Faster rebuild, dev env only
  entry: [
  	// 'webpack-hot-middleware/client?reload=true', - have to add hot middleware to express server
	  paths.entry
  ],
  output: {
    path:paths.build,
    filename: paths.output,
  },
  resolve: {
    root: __dirname,
    alias: {
        AliasName: 'alias-value'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader'
      },
	    {
	    	test: /\.json?$/,
		    loader: 'json-loader'
	    },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};



const path = require('path'),
	webpack = require('webpack'),
	//HTMLWebpackPlugin = require('html-webpack-plugin'), // Useful when bundles file names change dynamically
	paths = {
	    entry: path.join([__dirname, '..', 'client', 'index.js']),
	    build: path.join([__dirname, '..', 'public']),
	    output: path.join([__dirname, '..', 'public', 'bundle.js'])
	};

module.exports = {
	devtool: 'eval-source-map', // Faster rebuild, dev env only
  entry: [
  	'webpack-hot-middleware/client?reload=true',
	  paths.entry
  ],
  output: {
    path: __dirname,
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
	    	test: /\.css$/,
		    loader: ['style-loader', 'css-loader']
	    },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};



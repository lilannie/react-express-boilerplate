const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    env = process.env.NODE_ENV,
    isProduction = env === 'production',
    paths = {
        entry: path.join(__dirname, '..', 'client', 'router.js'),
        build: path.join(__dirname, '..', 'public'),
        outputFile: 'bundle.js'
    };

module.exports = {
    entry: {
        main: paths.entry
    },
    output: {
        path: paths.build,
        filename: paths.outputFile,
        libraryTarget: 'umd'
    },
    devServer: {
        inline: true,
        contentBase: paths.build,
        port: 3100
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract(['css-loader'])
            }
        ]
    },
    devtool: isProduction ? 'source-map': false,
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'dev' // default NODE_ENV
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            sourceMap: true
        })
    ]
};



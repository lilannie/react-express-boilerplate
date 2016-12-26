var path = require('path'),
    paths = {
        entry: path.join(__dirname, '..', 'client', 'router.js'),
        build: path.join(__dirname, '..', 'public')
    },
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: path.join(__dirname, '..', 'public', 'index.html'),
    inject: 'body'
});

module.exports = {
    entry: [paths.entry],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }

        ]
    },

    output: {
        filename: 'bundle.js',
        path: paths.build
    },

    plugins: [HTMLWebpackPluginConfig]

};


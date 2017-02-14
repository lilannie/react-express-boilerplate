var path = require('path'),
    paths = {
        entry: path.join(__dirname, '..', 'client', 'router.js'),
        build: path.join(__dirname, '..', 'public'),
        output: path.join(__dirname, '..', 'public', 'bundle.js')
    };

module.exports = {
    entry: [
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
                loader: 'babel-loader',

                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};



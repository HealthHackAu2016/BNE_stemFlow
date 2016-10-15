
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3333',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './public_html/main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public_html/'),
        filename: 'bundle.js',
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: './public_html',
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};

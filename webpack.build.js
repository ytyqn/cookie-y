const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'eval-cheap-module-source-map',
    entry: {
        cookie: path.resolve(__dirname, 'src/cookie.y.js')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    optimization: {
        usedExports: true
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
}

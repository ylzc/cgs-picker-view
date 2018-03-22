const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');
const env = require('yargs').argv.env;
const pkg = require('./package.json');

let libraryName = pkg.name;

let plugins = [], outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin());
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

const config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader",
                        options: {
                            minimize:true
                        }
                    },
                ]
            },
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    },
    externals: {
        'angular': "angular"
    },
    plugins: plugins
};

module.exports = config;
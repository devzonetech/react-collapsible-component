/*
 * This webpack config produces two js files: one is npm module file ReactCollapsibleComponent.js,
 * the other one is example app js file appExample.js in dist directory.
 * Devzone Tech Ltd.
 * https://www.devzonetech.com/
 */

var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, './src/')

var config = {
    devtool:'sourcemaps',
    cache: true,
    entry: {
        components_export: APP_DIR + '/components_export.js',
        appExample: APP_DIR + '/appExample.js',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        library: 'shared-components',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        loaders: [
            {
                test: /(\.scss|\.css)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    require.resolve('sass-loader') + '?sourceMap'
                ]
            },
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets:['env', 'stage-0', 'react' ], plugins:['add-module-exports']}
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                // Drop `console` statements
                drop_console: true
            },
            output: {
                comments: false,
            },
            sourceMap: false,
            // Don't beautify output (enable for neater output)
            beautify: false,
        })
    ]
}

module.exports = config
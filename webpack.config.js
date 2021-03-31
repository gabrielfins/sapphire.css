const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        'jquery',
        './src/js/sapphire.js'
    ],
    output: {
        filename: 'sapphire.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
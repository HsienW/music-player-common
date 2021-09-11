// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

// const isDev = process.env.NODE_ENV === 'development';
// const packageName = require('./package.json').name;

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'music-player-common.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                // 跟 plugins 中的設定對應
                use: ['cache-loader', 'babel-loader',]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    // {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, // size 大於 10K 就轉成使用 asset, 小於的話就轉成 64 base
                            // esModule: false,
                            name: '[name]_[hash:6].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
    ]
};

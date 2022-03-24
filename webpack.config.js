const webpack = require("webpack");
const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 0,
                            name: "assets/images/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                    ]
                }
            },
            {
                test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name]",
                            outputPath: "assets/fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "vue-style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebPackPlugin({
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            identifier: "module1",
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

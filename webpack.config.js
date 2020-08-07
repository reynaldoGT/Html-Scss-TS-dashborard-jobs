
const htmlPlugin = require('html-webpack-plugin');
const mini_css_extract_plugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/ts/app.ts',
    devtool: 'inline-source-map',
    devServer: {
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: mini_css_extract_plugin.loader },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            }, {
                test: /\.(jpg|png|gif|jpge)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html'
        }),
        new mini_css_extract_plugin({
            filename: 'bundle.css'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

}
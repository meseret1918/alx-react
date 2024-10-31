const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 9000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                    'file-loader',
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
};


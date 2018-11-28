const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
module.exports = {
    mode: "development",
    entry: {
        app: [path.resolve(SRC_PATH, 'index.js')]
    },
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        },
        {
            test: /\.scss$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ // css-hot-loader结局热替换CSS不自动刷新
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            }))
        }, {
            test: /\.css$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }))
        }, {
            test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
            loader: 'url-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 8192 // 小于8KB 使用base64格式图片
                }
            }]
        }, {
            test: /\.(mp3|webm|ogg)/,
            use: {
                loader: 'file-loader',
            }
        }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
            title: 'react-music-app',
            template: './templates/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
      new ExtractTextPlugin({
          filename: 'css/style.css',
          allChunks: true
      }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port:3000,
  }
};
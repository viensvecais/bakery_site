

var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    a: './js/main.js'
  },
  output:{
    // path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '/' : 'dist/'),
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader', // postcss loader so we can use autoprefixer
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },
        ]
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader', // postcss loader so we can use autoprefixer
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },
	      	"sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './img/',
              publicPath: './img/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: './fonts/',
          publicPath: './fonts/'
        },
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new ModernizrWebpackPlugin(),
    new CopyWebpackPlugin([
      {from: 'img/*.png', to:'./'} 
    ]), 
  ]
};
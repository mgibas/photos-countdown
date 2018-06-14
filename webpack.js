const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: resolve('./dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'targets': {
                'browsers': ['cover 95% in US', 'not dead', 'not chrome < 60']
              }
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            url: false,
            camelCase: true
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist', 'index.html']),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
      module: 'main'
    })
  ]
}

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: resolve('./docs')
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
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
      module: 'main'
    })
  ]
}

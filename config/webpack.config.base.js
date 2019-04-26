const helpers = require('./helpers')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

let config = {
  entry: {
    'main': helpers.root('/src/main.ts')
  },
  output: {
    path: helpers.root('/dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: path.join(process.cwd(), 'node_modules'),
      enforce: 'pre',
      use: [
        {
          loader: 'tslint-loader',
          options: {
            typeCheck: true,
            fix: true,
          },
        }
      ]
    },
    {
      test: /\.ts$/,
      exclude: path.join(process.cwd(), 'node_modules'),
      loader: 'ts-loader'
    },
    {
      test: /\.html$/,
      loader: 'raw-loader',
      exclude: [path.join(process.cwd(), 'src/index.html'),]
    }
    ]
  },
  plugins: [
    new NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: './assets'
    } ])
  ]
}

module.exports = config

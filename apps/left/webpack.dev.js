const { merge } = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common.js')
const federationConfig = require('./federation.config.json')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  cache: false,
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    port: 8003,
    historyApiFallback: true,
  },
  plugins: [],
})

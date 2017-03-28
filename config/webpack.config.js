const path = require('path')
const {basePlugins, developmentPlugins, productionPlugins} = require('./webpack.plugins.js')
const devServerConfig = require('./webpack.dev-server.config')

const __PROD__ = process.env.NODE_ENV === 'production'
const __DEV__ = !__PROD__

module.exports = {

  entry: __DEV__ ? './src/index.dev.js' : './src/index.js',

  output: {
    filename: 'app.js',
    path: path.resolve('./build')
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
        include: path.resolve('./src')
      },
      {
        test: /\.css?/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: __DEV__ ? '[name]__[local]' : '[hash:base64:10]'
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      },

    ]
  },

  plugins: [
    ...basePlugins,
    ...( __DEV__ ? developmentPlugins : productionPlugins )
  ],

  devServer: devServerConfig,
  devtool: __DEV__ ? 'cheap-module-source-map' : false
}

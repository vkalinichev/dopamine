const config = require('./config')

module.exports = {

  port: config.devServerPort,

  historyApiFallback: true,

  stats: {
    colors: true,
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    version: false,
    time: false
  }

}

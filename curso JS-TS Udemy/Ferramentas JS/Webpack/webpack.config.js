const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/js/index.js',
    './src/js/test.js'
  ], // Caso eu queira mais de uma página eu utilizo um array para adicionar mais de uma página ao bundle1
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }]
  },
  devtool: 'source-map'
}

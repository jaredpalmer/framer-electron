const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['webpack/hot/dev-server', './app.coffee']
  },
  devServer: {
    contentBase: './',
    publicPath: 'http://localhost:8080/'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: 'http://localhost:8080/dist'
  },
  module: {
     loaders: [
       {
         test: /\.coffee$/,
         loader: "coffee-loader"
       },
       {
         test: /\.js?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['es2015','stage-0']
         }
       }
     ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  target: 'electron-renderer'
};

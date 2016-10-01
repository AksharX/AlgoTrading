var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
  context: __dirname,
  entry: [
    './static/js/index',
  ],

  output: {
      path: path.resolve('./static/bundles/'),
      filename: '[name]-[hash].js',
       // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      // we pass the output from babel loader to react-hot loader
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: ['babel'], 
        query: {presets:['react','es2015',]}
        },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
}
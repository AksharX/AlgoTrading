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
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: ['babel-loader'], 
        query: {
          presets:['react','es2015','stage-0'],
          plugins:['transform-decorators-legacy','transform-class-properties','react-html-attrs']     
            }
        },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
}
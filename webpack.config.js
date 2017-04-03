const path = require('path')

module.exports = {
  context: __dirname, // tells webpack wich the root directory is
  entry: './js/ClientApp.js', // entry point of our ClientApp
  devtool: 'eval', // how webpack will transpile the bundle
  output: {
    path: path.join(__dirname, '/public'), // where the bundle will go
    filename: 'bundle.js' // the name of the bundle file
  },
  resolve: {
    extensions: ['.js', '.json'] // progression to assign extension to the imports (ex import Blah check if js, if not check if json)
  },
  stats: {
    // console stat settings
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    // rules on how to transpile the code
    rules: [
      {
        // before the build proccess happens
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        // test if the file is .js, if it is the use the babel-loader to transpile
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        // test for .css, if it passes, run the steps on use
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // don't inline images
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}


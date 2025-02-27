const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*"module.exports = { }" => commonJS syntax. */
/*
  entry: => react entry file
*/
module.exports = {
  entry: './src/index.js',
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ]
};

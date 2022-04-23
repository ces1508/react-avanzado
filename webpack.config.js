const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
console.log(path.resolve(__dirname, 'styles/'))
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-transform-runtime', { regenarator: true }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, 'styles/'),
      Components: path.resolve(__dirname, 'src/components'),
      Constants: path.resolve(__dirname, 'constants/')
    }
  }
}

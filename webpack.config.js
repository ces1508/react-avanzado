const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
console.log(path.resolve(__dirname, 'src/styles/'))
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
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@mutations': path.resolve(__dirname, 'src/mutations/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/')
    }
  }
}

const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.config.common');
const path = require("path");


const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'main.js'
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    devMiddleware: {
      index: 'index.html', 
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\module.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/i,
        include: /\module.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[md4:hash:7]'
              },
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          }
        },
        generator: {
          filename: './images/[name][ext]'
        }
      }
    ]
  }
}


module.exports = merge(commonConfig, devConfig);
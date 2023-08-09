const path = require('path');
const glob = require('glob');
const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const devConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash].js'
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({ 
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['imagemin-mozjpeg', { quality: 40 }],
              ['imagemin-pngquant', {
                quality: [0.65, 0.90],
                speed: 4,
              }],
              ['imagemin-gifsicle', { interlaced: true }],
              ['imagemin-svgo', {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          }
        },
        generator:[
          {
            type: 'asset',
            preset: 'webp-custom-name',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp']
            }
          }
        ]
      })
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: Infinity,
      minSize: 0,
      cacheGroups: {
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          chunks: 'initial',
          name: 'lodashs',
          priority: 2,
        },
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'node_modules'
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'async',
          name(module, chunks){
            return chunks.map(chunk => chunk.name).join("-")
          }
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.module.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.css$/i,
        include: /\.module.css$/,
        use: [ 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64]'
              },
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
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
          filename: './images/[name].[contenthash:12][ext]'
        },
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:12].css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(
        `${path.join(__dirname, '../src')}/**/*`,
        { nodir: true },
      ),
    }),
    new CompressionWebpackPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css)$/i,
    }),
    new CompressionWebpackPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css)$/i,
      compressionOptions: {
        level: 11,
      }
    }),
  ]
}


module.exports = merge(commonConfig, devConfig);
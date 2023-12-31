import webpack, { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types/types';

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: options.path.html,
      favicon: path.resolve(options.path.public, 'favicon.ico'),
      publicPath: '/'
    }),
    // To add global build constants or functions definePlugin(in this example global constant is PLATFORM)
    new DefinePlugin({
      PLATFORM: JSON.stringify(options.platform)
    })
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    // Выносит проверку типов в отдельный процесс не нагружая сборку
    //   plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    );
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(options.path.public, 'locales'),
            to: path.resolve(options.path.output, 'locales')
          }
        ]
      })
    );
  }

  if (options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};

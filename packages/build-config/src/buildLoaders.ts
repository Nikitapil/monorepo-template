import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import { buildTSLoader } from './ts-loader-module/buildTSLoader';

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const isProd = options.mode === 'production';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }]
  };

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]'
      }
    }
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      cssLoaderWithModules,
      'sass-loader'
    ]
  };

  const tsLoader = buildTSLoader(options);

  // uncomment to enable babelLoader
  // const babelLoader = buildBabelLoader(options);

  return [
    assetLoader,
    scssLoader,
    tsLoader,
    // babelLoader,
    svgrLoader
  ];
};

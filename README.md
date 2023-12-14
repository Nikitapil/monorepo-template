# React monorepo template

Monorepo template for react app.

## What is included:

1) Packages:
* build-config - decomposed config for webpack, include:
  *  buildBabelLoader helper(and example of babel plugin),
  *  buildTSLoader helper(and exaple of ts-loader plugin),
  *  buildDevServer helper,
  *  buildLoaders helper(include such loaders as assetLoader, svgrLoader, cssLoaderWithModules, scssLoader, tsLoader, babelLoader),
  *  buildPlugins helper (include HtmlWebpackPlugin, DefinePlugin as build variable for example how to use it, webpack.ProgressPlugin for dev build, ReactRefreshWebpackPlugin for hot reloading react as SPA app, MiniCssExtractPlugin, CopyPlugin, configurable BundleAnalyzerPlugin)
  *  buildResolvers helper
  *  buildWebpack - connect all other helpers to build finish webpack config, takes options as an argument, also in the package types for options are included in build-config package
* shared - package for all shared data, such as common types, fonts, helpers, components, constants, styles, and all other stuff that you can share between apps in monorepo

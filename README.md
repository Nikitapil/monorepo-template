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

2) Services(folder with all apps):
* host - aggregate app, that combines all others apps inside with webpack module federation
* moduleA, moduleB - example apps modules that exposes Routers in webpack module federation plugin
All modules in Services includes:
* public folder that store index.html, favicon.ico and locales as an example of static files
* src folders with their main code, (host app imports routers from other modules)
* package.json
* tsconfig.json that extended from global base tsconfig for all apps
* webpack config that is builded with helper from build-config package and extends it with webpack module federation plugin

3) Common eslintrc.json and prettierrc.json for common code style in the whole project
4) Common package.json with scripts for global linting and for starting all modules concurrently

## Get started

1) Clone this repo
2) Install dependencies (npm install)
3) Develop your modules and packages that need in your project

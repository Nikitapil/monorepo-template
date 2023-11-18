import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export const  buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const isDev = options.mode === 'development'
    return  {
        mode: options.mode ?? 'development',
        entry: options.path.entry,
        output: {
            path: options.path.output,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : 'source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
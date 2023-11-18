import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
import {buildBabelLoader} from "./babel/buildBabelLoader";

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
    const isProd = options.mode === 'production'
    const isDev = options.mode === 'development'

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]'
            },

        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            cssLoaderWithModules,
            "sass-loader"
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: isDev,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    })
                }
            }
        ],
        exclude: /node_modules/,
    }

    const babelLoader = buildBabelLoader(options)

    return [
      assetLoader,
      scssLoader,
      tsLoader,
      // babelLoader,
      svgrLoader
    ]
}
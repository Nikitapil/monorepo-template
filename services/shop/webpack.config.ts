import webpack from 'webpack';
import {buildWebpack} from "@packages/build-config";
import {BuildMode, BuildPlatform} from "@packages/build-config";
import path from "path";
import packageJson from './package.json'


interface EnvVariables {
  mode: BuildMode,
  port: number,
  platform: BuildPlatform
  analyzer?: boolean,
}

export default (env: EnvVariables) =>  {

   const config: webpack.Configuration = buildWebpack({
     port: env.port ?? 3001,
     path: {
       entry: path.resolve(__dirname, 'src', 'index.tsx'),
       html: path.resolve(__dirname, 'public', 'index.html'),
       output: path.resolve(__dirname, 'build'),
       src: path.resolve(__dirname, 'src'),
       public: path.resolve(__dirname, 'public')
     },
     mode: env.mode ?? "development",
     analyzer: env.analyzer,
     platform: env.platform ?? 'desktop'
   })

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name: 'shop',
    filename: 'remoteEntry.js',
    exposes: {
      './Router': './src/router/Router.tsx'
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies.react
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom']
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies["react-dom"]
      }
    }
  }))

  return config;
}


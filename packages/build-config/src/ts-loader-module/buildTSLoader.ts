import ReactRefreshTypeScript from 'react-refresh-typescript';
import * as ts from 'typescript';
import { BuildOptions } from '../types/types';
import { removeDataTestIdTransformer } from './removeDataTestIdTsLoaderTransformer';

export const buildTSLoader = (options: BuildOptions) => {
  const isProd = options.mode === 'production';
  const isDev = options.mode === 'development';

  const beforeTransformers: ts.TransformerFactory<any>[] = [];

  if (isProd) {
    beforeTransformers.push(removeDataTestIdTransformer());
  }

  if (isDev) {
    beforeTransformers.push(ReactRefreshTypeScript());
  }

  return {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: beforeTransformers
          })
        }
      }
    ],
    exclude: /node_modules/
  };
};

import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    }
  ]
};

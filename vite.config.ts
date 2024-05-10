import { resolve } from 'path';
import { AliasOptions, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { compilerOptions } from './tsconfig.json';

const { paths, baseUrl } = compilerOptions;
const normalizePathRegex = new RegExp(/[/][*]/g);

const aliasFromCompilerOptions = (
  paths: Record<string, string[]>,
  dirname: string,
): AliasOptions =>
  Object.entries(paths).map((pathConfig) => ({
    find: pathConfig[0].replace(normalizePathRegex, ''),
    replacement: resolve(
      dirname,
      `./${baseUrl}/${pathConfig[1][0].replace(normalizePathRegex, '')}`,
    ),
  }));

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['express', 'http', 'express-async-errors', 'joi'],
    },
    lib: {
      entry: {
        index: resolve(__dirname, './src/index.ts'),
        config: resolve(__dirname, './src/config.ts'),
        app: resolve(__dirname, './src/app.ts'),
      },
      name: 'express-api',
      formats: ['cjs', 'es'],
    },
  },
  resolve: {
    alias: aliasFromCompilerOptions(paths, __dirname),
  },
  plugins: [dts()],
});

// const path = require('path')
// const merge = require('deepmerge')
// const { defineConfig } = require('rollup')
// const nodeResolve = require('@rollup/plugin-node-resolve').default
// const babel = require('@rollup/plugin-babel').default
// const replace = require('@rollup/plugin-replace')
// const commonjs = require('@rollup/plugin-commonjs')
// const esbuild = require('rollup-plugin-esbuild').default
// const terser = require('@rollup/plugin-terser')
import path from 'path'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import terser from '@rollup/plugin-terser'
import nodeResolve from '@rollup/plugin-node-resolve'
import sass from 'rollup-plugin-sass'
import merge from 'deepmerge'

const extensions = ['.mjs', '.js', '.json', '.ts']

const baseConfig = defineConfig({
  input: path.resolve('./src/index.ts'),
  plugins: [
    nodeResolve({ extensions }),
    esbuild({
      tsconfig: path.resolve('./tsconfig.base.json'),
      target: 'esnext',
      sourceMap: true
    }),
    sass({
      output: 'dist/bundle.css'
    })
  ],
  external: ['vue'],
  output: {
    name: 'mafsv',
    format: 'umd',
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  }
})

// const devConfig = defineConfig({
//   plugins: [
//     replace({
//       values: {
//         __DEV__: JSON.stringify(true),
//         'process.env.NODE_ENV': JSON.stringify('development')
//       },
//       preventAssignment: true
//     })
//   ],
//   output: {
//     file: path.resolve('dist/index.js')
//   }
// })

const prodConfig = defineConfig({
  plugins: [
  ],
  output: {
    file: path.resolve('dist/index.prod.js')
  }
})

export default [merge(baseConfig, prodConfig)]
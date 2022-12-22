import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'inline'
    }),
    commonjs(),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true
    }),
    process.env.NODE_ENV === 'production' && terser()
  ]
};

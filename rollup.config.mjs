import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// noinspection JSUnusedGlobalSymbols
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    plugins: [commonjs(), json(), nodeResolve()],
}

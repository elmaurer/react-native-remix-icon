import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from "@rollup/plugin-terser";

export default [
    {
        input: 'src/index.ts',
        output: [
            /*{
                file: 'dist/index.cjs.js',
                format: 'cjs',
            },*/
            {
                file: 'dist/index.esm.js',
                format: 'esm',
            },
        ],
        plugins: [typescript(), terser()],
        external: [
            // Add external dependencies here (e.g., 'react', 'lodash')
            "react",
            "react-native",
            "react-native-svg",
        ],
    },
    {
        // Generate type definitions
        input: './dist/types/src/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()],
    },
];
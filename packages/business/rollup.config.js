import commonJs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import renameNodeModules from 'rollup-plugin-rename-node-modules';
import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default ({ watch }) => defineConfig({
	input: {
		index: 'src/index.ts',
	},
	output: [
		{
			dir       : 'dist/es',
			format    : 'esm',
			sourcemap : true,
		},
		{
			dir       : 'dist/cjs',
			format    : 'cjs',
			exports   : 'named',
			sourcemap : true,
		},
	],
	external: [
		'react',
		'react-dom',
		'next',
		'next/link',
		'next/router',
		'@cogoport/icons-react',
	],
	plugins: [
		...(watch ? [] : [del({ targets: 'dist/*' })]),
		nodeResolve(),
		commonJs(),
		svgr(),
		postcss({
			extract     : 'base.css',
			minimize    : true,
			autoModules : true,
			modules     : {
				generateScopedName: 'ui_[hash:base64:5]',
			},
		}),
		typescript({
			useTsconfigDeclarationDir : true,
			tsconfig                  : 'tsconfig.json',
			tsconfigOverride          : { compilerOptions: { declaration: true, declarationDir: 'dist/types' } },
		}),
		terser(),
		renameNodeModules('_vendors'),
		summary({
			showMinifiedSize : true,
			showGzippedSize  : true,
			showBrotliSize   : true,
		}),
		json(),
	],
});

/* eslint-env node */
'use strict';
const {join} = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ThreeWebpackPlugin = require('@wildpeaks/three-webpack-plugin');

module.exports = {
	target: 'web',
	resolve: {
		extensions: ['.ts', '.js']
	},
	entry: {
		basic: './src/basic.ts',
		code_splitting: './src/code_splitting.ts',
		webgl_postprocessing: './src/webgl_postprocessing.ts'
	},
	output: {
		publicPath: '',
		path: join(__dirname, 'dist')
	},
	performance: {
		hints: false
	},

	// DevServer provides:
	// http://localhost:8000/basic.html
	// http://localhost:8000/code_splitting.html
	// http://localhost:8000/webgl_postprocessing.html
	devServer: {
		port: 8000,
		publicPath: '',
		clientLogLevel: 'none',
		stats: 'errors-only'
	},

	module: {
		rules: [
			{
				test: /\.(ts|js)$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				]
			}
		]
	},
	plugins: [

		// Resets the output "dist" folder
		new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: false
		}),

		// Generates HTML pages
		new HtmlWebpackPlugin({
			title: 'Basic',
			chunks: ['basic'],
			filename: 'basic.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Code splitting',
			chunks: ['code_splitting'],
			filename: 'code_splitting.html'
		}),
		new HtmlWebpackPlugin({
			title: 'WebGL PostProcessing',
			chunks: ['webgl_postprocessing'],
			filename: 'webgl_postprocessing.html'
		}),

		// Enables importing classes from "three/examples/js"
		new ThreeWebpackPlugin()
	]
};


/**
 * The config could be shorter & support additional features
 * (like CSS or Subresource Integrity) using:
 * https://github.com/wildpeaks/package-webpack-config-web
 */
// const getConfig = require('@wildpeaks/webpack-config-web');
//
// module.exports = function(_env, {mode = 'production'} = {}) {
// 	const config = getConfig({
// 		mode,
// 		entry: {
// 			app1: './src/application.ts'
// 			// ...
// 		},
// 		pages: [
// 			{
// 				title: 'Entry app1',
// 				filename: 'app1.html',
// 				chunks: ['app1']
// 			}
// 			// ...
// 		]
// 	});
// 	config.plugins.push(new ThreeWebpackPlugin());
// 	return config;
// };

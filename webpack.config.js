const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

/**
 * HTML Webpack Plugin
 * @desc Configuration for building the HTML page
 * @note Some props are injected and some are configuration (rendering) settings
 */
const htmlPlugin = new HtmlWebPackPlugin({
	title: "Reactron",
	template: "./src/index.html",
	filename: "./index.html"
});

/**
 * Webpack Configuration
 */
module.exports = {
	entry: './src/index.js',
	target: 'electron-renderer',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: './',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					/node_modules/,
					/.json?/
				],
				use: {
					loader: 'babel-loader',
					query: {
						presets: ["env","react"]
					}
				}
			}, {
				test: /\.(s*)css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	plugins:[
		htmlPlugin
	],
	resolve: {
		extensions: ['.js','.jsx']
	}
}
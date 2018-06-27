const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		new NodemonPlugin({
			watch: path.resolve("."),
			script: path.resolve("./index.js"),
			ignore: [
				path.resolve("./public"),
				path.resolve("./src")
			]
		}),
		new MiniCssExtractPlugin({
			filename: 'build.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded',
							sourceMap: 'none'
						}
					}
				]
			}
		]
	}
}
